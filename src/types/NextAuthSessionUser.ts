import { JWT } from "next-auth/jwt";

export interface NextAuthSessionUser extends JWT {
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
}