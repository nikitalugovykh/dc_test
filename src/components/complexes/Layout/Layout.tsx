import { FC } from "react"
import { Outlet } from "react-router-dom"
import { routes } from "../../../constants/config"
import { useAppDispatch } from "../../../hooks/store"
import { MenuItem } from "../../simples/MunuItem"
import styles from "./Layout.module.scss"

type Props = {

}


const Layout: FC<Props> = () => {

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
