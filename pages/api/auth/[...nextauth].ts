import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import jwt from 'jsonwebtoken';
import { LoginApiResponse, Error as LoginError } from "../../../generated/rtk-query/comprasSpringAuthApi";

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
                    throw new Error("!credentials");
                }

                const secretKey = process.env.JWT_SECRET;
                if (!secretKey) {
                    throw new Error("!secretKey");
                }

                const response = await fetch(`${process.env.NEXT_PUBLIC_COMPRAS_SPRING_AUTH_BASE_URL}/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "username": credentials.username,
                        "password": credentials.password
                    }),
                });

                if (!response.ok) {
                    const error = await response.json() as LoginError;
                    throw new Error(error.message)
                }

                const permisos = await response.json() as LoginApiResponse;
                const token = response.headers.get('Authorization');

                if (!token) {
                    throw new Error("!token");
                }

                let user;
                user = jwt.verify(token.replace('Bearer ', ''), Buffer.from(secretKey, 'base64')) as jwt.JwtPayload;
                user.accessToken = token
                user.permisos = permisos;

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
        },

    },
    pages: {
        signIn: "/auth/signin"
    }
})
