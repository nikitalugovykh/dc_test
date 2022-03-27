import React, { FC, useEffect, useState } from "react"
import { RgbaColor } from "react-colorful"
import { defaultColor } from "../../../constants/config"
import { CurrentColorContext } from "../../../contexts/currentColorContext"
import { useAppDispatch, useAppSelector } from "../../../hooks/store"
import useComponentVisible from "../../../hooks/useComponentVisible"
import { addColor } from "../../../store/slice/app"
import { Button } from "../../simples/Button"
import { ColorPicker } from "../../simples/ColorPicker"
import { ColorsWrapper } from "../../simples/ColorsWrapper"
import styles from "./PalettePage.module.scss"

type Props = {
    loading?: boolean
    children?: any
}

// `rgba(${color.r},${color.g},${color.b},${color.a})`



const PalettePage: FC<Props> = () => {
    const dispatch = useAppDispatch()

    /**
     * @currentColorId id активного цветового кубика, у которого изменяется цвет при помощи colorPiker  
     */
    const [currentColorId, setCurrentColorId] = useState<number>(0)

    /**
     * @useComponentVisible хук помогающий отслеживать, где пользователь нажал мышкой, нужен для исчезновения colorPicker
     */

    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    useEffect(() => {
        setIsComponentVisible(true)
    }, [currentColorId])

    const onClickHandler = () => {

        // формируем каждому цвету уникальный id
        const id = new Date().getTime()

        setCurrentColorId(id)
        dispatch(addColor({ color: defaultColor, id }))
        setIsComponentVisible(true)
    }

    return (
        <div className={styles.wrapper}>
            <CurrentColorContext.Provider value={[currentColorId, setCurrentColorId]}>
                <ColorsWrapper />
                <div ref = {ref}>
                    {isComponentVisible && <ColorPicker currentColorId={currentColorId} />}
                </div>
            </CurrentColorContext.Provider>
            <Button classes={{root: {marginTop: 15}}} title={'Добавить цвет'} onClick={onClickHandler} />
        </div>
    )
}

export default PalettePage
