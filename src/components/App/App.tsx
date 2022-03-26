import React, {useEffect} from "react"
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import styles from "./App.module.scss"
import {routes} from "../../constants/config"
import { Layout } from "../complexes/Layout"
import { FormPage } from "../pages/FormPage"
import { PalettePage } from "../pages/PalettePage"


const App = () => {
  


    return (
        <Routes>
            
            <Route
                path={"/"}
                element={
                    <Layout />
                }
            >
                <Route
                    index
                    element={
                            <FormPage />
                    }
                />
                <Route
                    path={routes.palette}
                    element={
                            <PalettePage />
                    }
                />
            </Route>
        </Routes>
    )
}

export default App
