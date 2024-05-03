import NextAuth from "next-auth";
import { NextAuthSessionUser } from "./NextAuthSessionUser";

declare module "next-auth" {
    interface Session {
        user: NextAuthSessionUser;
    }
}