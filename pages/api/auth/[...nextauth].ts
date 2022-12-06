import NextAuth, { NextAuthOptions } from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
import { redirect } from "next/dist/server/api-utils";
import { generateRandomString } from "../../../utils/functions";
import { refreshAccessToken } from "../../../utils/login";

const SCOPE =
    "user-read-recently-played user-read-playback-state user-top-read user-modify-playback-state user-read-currently-playing user-follow-read playlist-read-private user-read-email user-read-private user-library-read playlist-read-collaborative";

const RESPONSE_TYPE = "token";


export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers  
    providers: [
        SpotifyProvider({
            clientId: process.env.NEXT_PUBLIC_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET!,
            authorization: {
                params: {
                    // response_type: RESPONSE_TYPE,
                    // client_id: process.env.NEXT_PUBLIC_CLIENT_ID!,
                    scope: SCOPE,
                    // redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URL!,
                    state: generateRandomString(16),
                }
            },
        }),
        // ...add more providers here  
    ],
    secret: process.env.NEXTAUTH_SECRET!,
    session: {
        strategy: "jwt",
        maxAge: 3600,
    },
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, account, user, profile }) {
            if (account && user) {
                return {
                    ...token,
                    accessToken: account.access_token,
                    accessTokenExpires: Date.now() + (account.expires_at as number ?? 0) * 1000,
                    refreshToken: account.refresh_token,
                    user,
                }
            }


            if (Date.now() < token.accessTokenExpires!) {
                console.log("Token has not expired", token.accessTokenExpires)
                return token;
            }
            console.log('token has expired');
            return await refreshAccessToken(token);
            // return await checkAccessToken(token);

        },
        async session({ session, token }) {
            session.user = {
                name: token.user!.name,
                email: token.user!.email,
            };
            session.accessToken = token.accessToken as string;
            console.log('Checking session token', token);

            return session;
        }
    }
}
export default NextAuth(authOptions);