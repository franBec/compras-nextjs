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
                if (token) {
                    const secretKey = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'; // Replace this with your actual Base64-encoded secret key
                    const decodedSecret = Buffer.from(secretKey, 'base64');

                    try {
                        const decoded = jwt.verify(token.replace('Bearer ', ''), decodedSecret);
                        console.log(decoded)
                        return decoded as any;
                    } catch (error) {
                        console.error('JWT verification failed:', error);
                        return null;
                    }
                } else {
                    return null;
                }
            }
        })
    ]
})
