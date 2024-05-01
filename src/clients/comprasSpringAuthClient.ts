import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LoginApiArg } from '../../generated/rtk-query/comprasSpringAuthApi';

export const comprasSpringAuthClient = createApi({
    reducerPath: "comprasSpringAuthClient",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_COMPRAS_SPRING_AUTH_BASE_URL }),
    endpoints: () => ({}),
})

const injectedRtkApis = comprasSpringAuthClient.injectEndpoints({
    endpoints: (build) => ({
        loginAndGetHeaders: build.mutation<HeadersApiResponse, LoginApiArg>({
            query: (queryArg) => ({
                url: `/login`,
                method: "POST",
                body: queryArg.loginRequest,
                responseHandler: async (response) => {
                    const headers: Record<string, string> = {};
                    response.headers.forEach((value, key) => {
                        headers[key] = value;
                    });
                    return headers;
                },
            }),
        }),
    }),
    overrideExisting: false,
})
export const { useLoginAndGetHeadersMutation } = injectedRtkApis
export type HeadersApiResponse = Record<string, string>;