import { NextAuthSessionUser } from "@/types/NextAuthSessionUser";
import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

interface PathPermission {
    path: string;
    permission: string;
}

const pathPermissions: PathPermission[] = [
    { path: "/coordinacion", permission: "COMPRAS_PG_COO_MENU" },
    { path: "/expediente", permission: "COMPRAS_CE_MENU" },
    { path: "/expediente-ue", permission: "COMPRAS_CE_UE_EXPEDIENTE_MENU" },
    { path: "/producto", permission: "COMPRAS_PG_PD_MENU" },
    { path: "/proveedor", permission: "COMPRAS_PV_MENU" },
    { path: "/requisito", permission: "COMPRAS_PG_RR_MENU" },
    { path: "/rubro", permission: "COMPRAS_PG_RUBRO_MENU" },
    { path: "/solicitar-producto", permission: "COMPRAS_PG_PD_UE_MENU" },
    { path: "/tipo-asignacion", permission: "COMPRAS_PG_TA_MENU" },
    { path: "/tipo-expediente-compra", permission: "COMPRAS_PG_TEC_MENU" },
    { path: "/tipo-contratacion", permission: "COMPRAS_PG_TCON_MENU" },
    { path: "/unidad-ejecutora", permission: "COMPRAS_PG_UE_MENU" },
    { path: "/unidad-medida", permission: "COMPRAS_PG_UM_MENU" }
];

export default withAuth(
    function middleware(req) {
        const { pathname } = req.nextUrl;
        const reqNextAuthToken = req.nextauth.token as NextAuthSessionUser | null;
        const forbiddenUrl = "/auth/forbidden";

        for (const { path, permission } of pathPermissions) {
            if (pathname.startsWith(path) && !reqNextAuthToken?.permisos.includes(permission)) {
                return NextResponse.rewrite(
                    new URL(forbiddenUrl, req.url)
                );
            }
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
);

export const config = {
    matcher: [
        "/",
        "/coordinacion/:path*",
        "/expediente/:path*",
        "/expediente-ue/:path*",
        "/producto/:path*",
        "/proveedor/:path*",
        "/requisito/:path*",
        "/rubro/:path*",
        "/solicitar-producto/:path*",
        "/tipo-asignacion/:path*",
        "/tipo-expediente-compra/:path*",
        "/tipo-contratacion/:path*",
        "/unidad-ejecutora/:path*",
        "/unidad-medida/:path*",
    ],
};
