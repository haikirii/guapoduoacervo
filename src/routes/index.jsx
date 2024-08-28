import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import Home from "../pages/Home";
import Guapoverso from "../pages/Guapoverso";
import Categoria from "../pages/Categoria";
import NotFound from "../pages/NotFound";
import Sobre from "../pages/Sobre";
import Dashboard from "../pages/Dashboard";
import Autores from "../pages/Autores/Autores";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Paths = () =>{
    const { isLogged } = useContext(AuthContext);
    return(
        <>
            <BrowserRouter basename={import.meta.env.BASE_URL}>
                <Routes>
                    <Route path={'/'} element={<PageLayout/> }>
                        <Route index element={<Home />}/>
                        <Route path={'/Guapoverso'} element={<Guapoverso />}/>
                        <Route path={'/Categoria'}element={<Categoria />}/>
                        <Route path={'/Sobre'}element={<Sobre />}/>
                        <Route path={'/Autores'}element={<Autores />}/>
                        {
                            isLogged && <Route path={'./Dashboard'}element={<Dashboard />}/>
                        }
                    </Route>
                    <Route path={'*'} element={<NotFound />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}