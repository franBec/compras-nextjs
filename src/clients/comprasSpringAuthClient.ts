import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const comprasSpringAuthClient = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_COMPRAS_SPRING_AUTH_BASE_URL }),
    endpoints: () => ({}),
})