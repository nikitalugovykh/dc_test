import React, { CSSProperties, FC, useContext, useEffect, useState } from "react"
import { RgbaColor, RgbaColorPicker } from "react-colorful";
import { useAppDispatch, useAppSelector } from "../../../hooks/store";
import { updateColor } from "../../../store/slice/app";
import styles from "./ColorPicker.module.scss"

type Props = {
    currentColorId?: number
}
const ColorPicker: FC<Props> = ({ currentColorId }) => {    

    const dispatch = useAppDispatch()
    const color = useAppSelector(state => state.app.colors).find(item => item.id === currentColorId)


    const onChangeHandler = (color: RgbaColor) => {
        currentColorId && dispatch(updateColor({ color, id: currentColorId }))

    }

    return (
        <div className={styles.wrapper} id = {'colorPicker'}>
            {color && <RgbaColorPicker color={color.color} onChange={onChangeHandler} />}
        </div>
    )
}

export default ColorPicker
