import axios from "axios";
import { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt";

const authenticateSession = (session: DefaultSession | null) => {
    console.log("authenticating session check", session);
    if (!session) {
        return false;
    }
    return true;
}

const refreshAccessToken = async (token: JWT) => {
    try {

        const url = `${process.env.NEXT_PUBLIC_BASE_AUTH_URL}/api/token`;
        const authOptions = {
            headers: { 'Authorization': `Basic ${Buffer.from(`${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.NEXT_PUBLIC_CLIENT_SECRET}`, "base64")}` },
            form: {
                grant_type: 'refresh_token',
                refresh_token: token.refreshToken,
            }
        }

        const res = await axios.post(url, authOptions)

        console.log("Check res", res);
        return token;

    } catch (error: any) {
        console.error(new Error(error));
        return token;
    }
}



export { authenticateSession, refreshAccessToken }