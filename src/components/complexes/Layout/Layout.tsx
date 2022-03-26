import React, {FC, useState} from "react"
import {Outlet} from "react-router-dom"
import {useAppDispatch} from "../../../hooks/store"
import styles from "./Layout.module.scss"

type Props = {
    loading?: boolean
    children?: any
}
// export const ProfileTabMeny = React.createContext<
//     [ProfileTab, React.Dispatch<React.SetStateAction<ProfileTab>>]
// >([{} as ProfileTab, () => {}])

const Layout: FC<Props> = ({loading = false, children}) => {
    // const preloading = useAppSelector(selectAuthChecking)
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     // dispatch(checkUser)
    // }, [])
    // const [context, setContext] = useState<ProfileTab>(ProfileTab.SELERS_DATA)

    return (
        <div className={styles.wrapper}>
            <header>это header</header>
            <main>
                <Outlet/>
            </main>
            {/* <aside className={styles.leftMenu}>
                <ProfileTabMeny.Provider value={[context, setContext]}>
                    <LeftMenu />
                </ProfileTabMeny.Provider>
            </aside>
            <header className={styles.header}>
                <div className={styles.menuHeader}>
                    <p className={styles.titleHeader}>Настройки</p>
                    <p className={styles.titleHeader2}>
                        Доступ к редактированию
                    </p>
                </div>
                <div className={styles.block}>
                    <RightMenu />
                </div>
            </header>
            <div className={styles.mainWrapper}>
                <div className={styles.content}>
                    <Scrollbars
                        style={{
                            height: "100%",
                        }}
                    >
                        <ProfileTabMeny.Provider value={[context, setContext]}>
                            <main className={styles.main}>{<Outlet />}</main>
                        </ProfileTabMeny.Provider>
                    </Scrollbars>
                </div>
            </div> */}
        </div>
    )
}

export default Layout
