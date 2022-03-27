import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ColorType } from '../../types/types'

/**
 * Начальное состояние редьюсера App/
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
        /**
         *  @addColor  редюсер для добавления нового цвета в стор
         * */
        addColor: (state, action: PayloadAction<ColorType>) => {
            state.colors = [...state.colors, action.payload]
        },
        /**
        *  @updateColor  редюсер для изменения выбранного цвета
        * */
        updateColor: (state, action: PayloadAction<ColorType>) => {
            const color = state.colors.find((color) => color.id === action.payload.id)
            if (color) {
                color.color = action.payload.color
            }
        },

        /**
        *  @removeColor  редюсер для удаления цвета из стора
        * */
        removeColor: (state, action: PayloadAction<number>) => {
            state.colors = state.colors.filter(color => color.id !== action.payload)
        }
    },

})





export const {
    addColor,
    removeColor,
    updateColor
} = appSlice.actions


// -------------------------------------------
// Export a reducer
// -------------------------------------------
export default appSlice.reducer
