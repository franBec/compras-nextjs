import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import jwt from 'jsonwebtoken';
import { login, getPermisos } from "@/utils/nextAuthFetch";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { type: "text" },
                password: { type: "password" }
            },
            async authorize(credentials, req) {
                if (!credentials) {
                    throw new Error("undefined credentials")
                }

                const secretKey = process.env.JWT_SECRET;
                if (!secretKey) {
                    throw new Error("undefined process.env.JWT_SECRET")
                }

                const token = await login(credentials?.username, credentials?.password);
                if (!token) {
                    return null;
                }

                let user;

                try {
                    user = jwt.verify(token.replace('Bearer ', ''), Buffer.from(secretKey, 'base64')) as jwt.JwtPayload;
                    user.accessToken = token
                } catch (error) {
                    return null;
                }

                const permisos = await getPermisos(token);
                if (permisos) {
                    user.permisos = permisos;
                }
                else {
                    user.permisos = []
                }

                return user as any;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            session.user = token as any;
            return session;
        }
    },
    pages: {
        signIn: "/auth/signin"
    }
})
