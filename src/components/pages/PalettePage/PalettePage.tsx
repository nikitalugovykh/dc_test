import React, {FC, useState} from "react"
import {useAppDispatch, useAppSelector} from "../../../hooks/store"
import { ColorPicker } from "../../simples/ColorPicker"
import { ColorsWrapper } from "../../simples/ColorsWrapper"
import styles from "./PalettePage.module.scss"

type Props = {
    loading?: boolean
    children?: any
}


const PalettePage: FC<Props> = ({loading = false, children}) => {
    const dispatch = useAppDispatch()

    return (
        <div className={styles.wrapper}>
           <ColorsWrapper/>
           <ColorPicker/>
           
        </div>
    )
}

export default PalettePage
