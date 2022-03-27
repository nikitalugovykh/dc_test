import React, { CSSProperties, FC, useState } from "react"
import { RgbaColor, RgbaColorPicker } from "react-colorful";
import styles from "./ColorPicker.module.scss"

type Props = {

}
const ColorPicker: FC<Props> = () => {

    const [color, setColor] = useState<RgbaColor>()


    const onChangeHandler = (color: RgbaColor) => {
        setColor(color)
    }


    return (
        <div className={styles.wrapper}>
             <RgbaColorPicker color={color} onChange={onChangeHandler} />
        </div>
    )
}

export default ColorPicker
