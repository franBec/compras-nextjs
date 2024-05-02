export async function login(username: string, password: string): Promise<string | null> {
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
        console.error('Login failed:', response.statusText);
        return null;
    }

    const token = response.headers.get('Authorization');
    return token;
}

export async function getPermisos(token: string): Promise<string[] | null> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_COMPRAS_SPRING_AUTH_BASE_URL}/permiso`, {
        method: 'GET',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        console.error('Failed to fetch permissions:', response.statusText);
        return null;
    }

    const permissions = await response.json();
    return permissions;
}
