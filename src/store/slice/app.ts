import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../index'

/**
 * Начальное состояние редьюсера Auth/
 */

export const initialState = {
    
    
}



/**
 * Создание слайса App
 */
export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
       
    },
  
})





export const {
 
} = appSlice.actions


// -------------------------------------------
// Export a reducer
// -------------------------------------------
export default appSlice.reducer
