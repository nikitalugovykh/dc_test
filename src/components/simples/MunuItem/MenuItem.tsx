import React, { FC } from "react"
import {
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom"
import { routes } from "../../../constants/config"
import styles from "./MenuItem.module.scss"

type Props = {
    route: routes | ""
    title: string
}
const MenuItem: FC<Props> = ({route, title}) => {

    let resolved = useResolvedPath(route)

    let match = useMatch({ path: resolved.pathname, end: true })


    return (
        <li>
            <Link
                style={
                    match ? { borderBottom: '0.5px solid #fff' } : { }
                }
                className = {styles.link}
                to={route}
            >
                {title}
            </Link>

        </li>

    )
}

export default MenuItem
