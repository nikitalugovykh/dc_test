import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../store/slice/app'

export const store = configureStore({
    reducer: {
        app: appReducer
    },
})

// Вывод типов `RootState` и `AppDispatch` из стора.
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
