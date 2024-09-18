import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

export const Paths = () => {
    return (
        <>
            <BrowserRouter basename={import.meta.env.BASE_URL}>
                <Routes>
                    <Route path={'/'} element={<PageLayout />}>
                        <Route index element={<Home />} />
                    </Route>
                    <Route path={'*'} element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}