import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            estado: boolean,
            displayName: string,
            externalGuid: string,
            id: number,
            userName: string,
            dni: string,
            fechaCambioClave: string,
            sub: string,
            iat: number,
            exp: number,
            accessToken: string;
            permisos: string[]
        };
    }
}