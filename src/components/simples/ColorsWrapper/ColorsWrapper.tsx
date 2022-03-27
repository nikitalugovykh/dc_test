import React, { CSSProperties, FC } from "react"
import { useAppSelector } from "../../../hooks/store"
import styles from "./ColorsWrapper.module.scss"

type Props = {
    
}
const ColorsWrapper: FC<Props> = () => {

    const colors = useAppSelector(state => state.app.colors)

    return (
        <div>

        </div>
    )
}

export default ColorsWrapper
