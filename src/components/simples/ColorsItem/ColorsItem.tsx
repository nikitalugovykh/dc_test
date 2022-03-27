import React, { CSSProperties, FC } from "react"
import { useAppSelector } from "../../../hooks/store"
import styles from "./ColorsItem.module.scss"

type Props = {
    
}
const ColorsItem: FC<Props> = () => {

    const colors = useAppSelector(state => state.app.colors)

    return (
        <div>

        </div>
    )
}

export default ColorsItem
