import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ColorType } from '../../types/types'
import { RootState } from '../index'

/**
 * Начальное состояние редьюсера Auth/
 */

type StateAppType = {
    colors: ColorType[]
}

export const initialState: StateAppType = {
    colors: []
}



/**
 * Создание слайса App
 */
export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        addColor: (state, action: PayloadAction<ColorType>) => {
            state.colors = [...state.colors, action.payload]
        },
        removeColor: (state, action: PayloadAction<number>) => {
            state.colors = state.colors.filter(color => color.id !== action.payload)
        }
    },

})





export const {
    addColor,
    removeColor
} = appSlice.actions


// -------------------------------------------
// Export a reducer
// -------------------------------------------
export default appSlice.reducer
