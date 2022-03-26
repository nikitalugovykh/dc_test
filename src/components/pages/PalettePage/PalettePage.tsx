import React, {FC, useState} from "react"
import {useAppDispatch} from "../../../hooks/store"
import styles from "./PalettePage.module.scss"

type Props = {
    loading?: boolean
    children?: any
}


const PalettePage: FC<Props> = ({loading = false, children}) => {
    const dispatch = useAppDispatch()

    return (
        <div className={styles.wrapper}>
           <div>
               <p>
                   это PalettePage
               </p>
           </div>
           
        </div>
    )
}

export default PalettePage
