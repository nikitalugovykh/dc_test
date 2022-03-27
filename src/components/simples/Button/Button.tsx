import React, { CSSProperties, FC } from "react"
import styles from "./Button.module.scss"

type Props = {
    onClick?: () => void
    title: string,
    classes?: {
        root?: CSSProperties
    },
    onSubmit?: () => void
}
const Button: FC<Props> = ({onClick, title, classes, onSubmit}) => {


    const onClickHandler = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        ev.preventDefault()
        onClick && onClick()
    }


    const onSubmitHandler = (ev: React.FormEvent<HTMLButtonElement>) => {
        ev.preventDefault()
        onSubmit && onSubmit()
    }

    return (
        <button onSubmit={(e) =>onSubmitHandler} style = {classes?.root} className={styles.btn} onClick = {onClickHandler}>
            {title}
        </button>
    )
}

export default Button
