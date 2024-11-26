import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import TestComponent from "../pages/TestComponent";
import FanartProtot from "../pages/FanartProtot";

export const Paths = () => {
    return (
        <>
            <BrowserRouter basename={import.meta.env.BASE_URL}>
                <Routes>
                    <Route path={'/'} element={<PageLayout />}>
                        <Route index element={<Home />} />
                        <Route path={'/t'} element={<TestComponent />}/>
                        <Route path={'/FanartProtot'} element={<FanartProtot />}/>
                    </Route>
                    <Route path={'*'} element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}