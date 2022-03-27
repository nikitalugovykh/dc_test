import React, { FC } from "react"
import { useAppSelector } from "../../../hooks/store"
import { ColorsItem } from "../ColorsItem"
import styles from "./ColorsWrapper.module.scss"

type Props = {
}
const ColorsWrapper: FC<Props> = ({}) => {

    const colors = useAppSelector(state => state.app.colors)


    return (
        <div className = {styles.colorWrapper}>
            {colors.map((item) => (
                <ColorsItem 
                    color = {item} 
                    key = {item.id}  
                />
            ))}
        </div>
    )
}

export default React.memo(ColorsWrapper)
