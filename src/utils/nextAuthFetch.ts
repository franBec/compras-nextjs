import { Error, LoginApiResponse } from "../../generated/rtk-query/comprasSpringAuthApi";

export async function login(username: string, password: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_COMPRAS_SPRING_AUTH_BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password
        }),
    });

    if (!response.ok) {
        const error = await response.json() as Error;
        return error;
    }

    const permisos = await response.json() as LoginApiResponse;
    const token = response.headers.get('Authorization');

    return { token, permisos };
}
