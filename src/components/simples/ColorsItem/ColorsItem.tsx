import React, { CSSProperties, FC, useCallback, useContext, useMemo } from "react"
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
    const [currentColorId, setCurrentColorId] = useContext(CurrentColorContext)

    const removeClickHandler = useCallback((ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        ev.stopPropagation()
        
        dispatch(removeColor(color.id))
    }, [color])

    const rgbaColor = useMemo(() => {
        return convertRgba(color.color)
    }, [color.color])


    const onClickChangeHandler = useCallback(() => {
        setCurrentColorId(color.id)
    }, [color])

    return (
        <div 
            onClick={onClickChangeHandler}
            className={styles.colorItem} 
            style = {{backgroundColor: rgbaColor}}
        >
            <div className = {styles.removeBtn} onClick = {removeClickHandler}/>
        </div>
    )
}

export default React.memo(ColorsItem)



