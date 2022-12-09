import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { DefaultSession, Session } from "next-auth"
import { JWT } from "next-auth/jwt";
import qs from "qs";

const CLIENT_ID: string = process.env.NEXT_PUBLIC_CLIENT_ID!;
const CLIENT_SECRET: string = process.env.NEXT_PUBLIC_CLIENT_SECRET!;
const BASE_AUTH_URL: string = process.env.NEXT_PUBLIC_BASE_AUTH_URL!;
const SCOPE =
    "user-read-recently-played user-read-playback-state user-top-read user-modify-playback-state user-read-currently-playing user-follow-read playlist-read-private user-read-email user-read-private user-library-read playlist-read-collaborative";

const TOKEN_URL = `${BASE_AUTH_URL}/api/token`;

const authenticateSession = (session: Session | null) => {
    console.log("authenticating session check", session);
    if (!session || Date.now() > session.accessTokenExpires) {
        console.log("Not authenticated");
        return false;
    }
    return true;
}

// const requestTokens = async (token: JWT) => {
//     try {
//         const config: AxiosRequestConfig = {
//             url: TOKEN_URL,
//             method: "GET",
//             headers: {
//                 "Accept-Encoding": "application/json",
//                 'Authorization':
//                     `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`,
//             },
//             data: qs.stringify({
//                 grant_type: "authorization_code",
//                 code: token.accessToken,
//                 redirect_uri: "http://localhost:3000/api/auth/callback/spotify",
//             })
//         }
//         const res = await axios(config)
//         console.log("requestTokens", res);
//         return res.data;
//     } catch (error: any) {
//         console.error(error.response);
//     }
// }

const refreshAccessToken = async (currentToken: JWT) => {
    const { refreshToken } = currentToken;
    try {
        const config: AxiosRequestConfig = {
            url: TOKEN_URL,
            method: "POST",
            headers: {
                "Accept-Encoding": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                'Authorization':
                    `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`,
            },
            data: qs.stringify({
                grant_type: "refresh_token",
                refresh_token: refreshToken,
            })
        }


        const { data } = await axios(config);
        const newToken = {
            accessToken: data.access_token,
            accessTokenExpires: Date.now() + (data.expires_in ?? 0) * 1000,
            refreshToken,
            user: currentToken.user,
        }
        console.log('Checking new token', newToken)
        return newToken;

    } catch (error: any) {
        console.error(error.response.data);
        return currentToken;
    }
}

export { authenticateSession, refreshAccessToken, CLIENT_ID, CLIENT_SECRET, SCOPE }