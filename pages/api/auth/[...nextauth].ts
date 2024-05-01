import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import jwt from 'jsonwebtoken';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Nombre de usuario", type: "text" },
                password: { label: "Contraseña", type: "password" }
            },
            async authorize(credentials, req) {
                const secretKey = process.env.JWT_SECRET;
                if (!secretKey) {
                    throw new Error("undefined process.env.JWT_SECRET")
                }
                const res = await fetch("http://localhost:8081/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: credentials?.username,
                        password: credentials?.password
                    })
                });

                const token = res.headers.get('Authorization');
                if (!token) {
                    return null;
                }

                const decodedSecret = Buffer.from(secretKey, 'base64');
                try {
                    const user = jwt.verify(token.replace('Bearer ', ''), decodedSecret) as jwt.JwtPayload;
                    user.accessToken = token
                    return user as any;
                } catch (error) {
                    return null;
                }
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
    }
})
