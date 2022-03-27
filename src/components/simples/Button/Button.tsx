import React, { CSSProperties, FC } from "react"
import styles from "./Button.module.scss"

type Props = {
    onClick: () => void
    title: string,
    classes?: {
        root?: CSSProperties
    }
}
const Button: FC<Props> = ({onClick, title, classes}) => {


    const onClickHandler = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        ev.preventDefault()
        onClick()

    }

    return (
        <button style = {classes?.root} className={styles.btn} onClick = {onClickHandler}>
            {title}
        </button>
    )
}

export default Button
