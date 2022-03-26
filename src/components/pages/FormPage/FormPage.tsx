import React, {FC, useState} from "react"
import {useAppDispatch} from "../../../hooks/store"
import styles from "./FormPage.module.scss"

type Props = {
    loading?: boolean
    children?: any
}


const FormPage: FC<Props> = ({loading = false, children}) => {
    const dispatch = useAppDispatch()

    return (
        <div className={styles.wrapper}>
           <div>
               <p>
                   это форма
               </p>
           </div>
           
        </div>
    )
}

export default FormPage
