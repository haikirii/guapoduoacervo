import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Perpetuo from "../pages/Perpetuo";
import Wip from "../pages/Wip";

export const Paths = () => {
    return (
        <>
            <BrowserRouter basename={import.meta.env.BASE_URL}>
                <Routes>
                    <Route path={'/'} element={<PageLayout />}>
                        <Route index element={<Wip />} />
                        <Route path={'/login'} element={<Login />} />
                        <Route path={'/perpetuo'} element={<Perpetuo />} />
                        {/* <Route index element={<Home />}/>
                        <Route path={'/Guapoverso'} element={<Guapoverso />}/>
                        <Route path={'/Categoria'}element={<Categoria />}/>
                        <Route path={'/Sobre'}element={<Sobre />}/>
                        <Route path={'/Autores'}element={<Autores />}/> */}
                    </Route>
                    <Route path={'*'} element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}