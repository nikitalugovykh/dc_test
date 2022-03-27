import React, { CSSProperties, FC, useCallback, useContext } from "react"
import { convertRgba } from "../../../constants/helper"
import { CurrentColorContext } from "../../../contexts/currentColorContext"
import { useAppDispatch, useAppSelector } from "../../../hooks/store"
import { removeColor } from "../../../store/slice/app"
import { ColorType } from "../../../types/types"
import {ReactComponent as removeIcon} from './../../../Images/remove_icon.svg'
import styles from "./ColorsItem.module.scss"

type Props = {
    color: ColorType
}
const ColorsItem: FC<Props> = ({color}) => {
    const dispatch = useAppDispatch()
    const colors = useAppSelector(state => state.app.colors)
    const [currentColorId, setCurrentColorId] = useContext(CurrentColorContext)

    const removeClickHandler = useCallback((ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        ev.stopPropagation()
        
        dispatch(removeColor(color.id))
    }, [color])


    const onClickChangeHandler = useCallback(() => {
        setCurrentColorId(color.id)
    }, [color])

    return (
        <div 
            onClick={onClickChangeHandler}
            className={styles.colorItem} 
            style = {{backgroundColor: `${convertRgba(color.color)}`}}
        
        >
            <div className = {styles.removeBtn} onClick = {removeClickHandler}/>
        </div>
    )
}

export default ColorsItem



