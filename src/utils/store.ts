import { combineReducers, configureStore, Reducer, UnknownAction } from '@reduxjs/toolkit'
import { comprasSpringAuthClient } from '@/clients/comprasSpringAuthClient'

const combinedReducer = combineReducers({
    [comprasSpringAuthClient.reducerPath]: comprasSpringAuthClient.reducer
})

const rootReducer: Reducer = (state: RootState, action: UnknownAction) => {
    if (action.type === 'store/reset') {
        return {} as RootState
    }
    return combinedReducer(state, action)
}

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
            .concat(comprasSpringAuthClient.middleware)
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']