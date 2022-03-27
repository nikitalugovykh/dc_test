import React, { FC, useState } from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { routes } from "../../../constants/config"
import { useAppDispatch } from "../../../hooks/store"
import { MenuItem } from "../../simples/MunuItem"
import styles from "./Layout.module.scss"

type Props = {
    loading?: boolean
    children?: any
}


const Layout: FC<Props> = ({ loading = false, children }) => {
    const dispatch = useAppDispatch()

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <nav>
                    <ul className={styles.ul}>
                        <MenuItem route={routes.home} title={'Форма'} />
                        <MenuItem route={routes.palette} title={'Палитра'} />
                    </ul>




                </nav>



            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
