import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import FooterWip from "../../components/FooterWip";
import HeaderPista from "../../components/HeaderPista";
import FooterPista from "../../components/FooterPista";
import styles from "./index.module.scss";
import { useContext } from "react";
import { ThemeContext } from '../../contexts/ThemeContext';

const PageLayout = () =>{
    const { theme } = useContext(ThemeContext);
    const location = useLocation();

    document.body.classList.add('background-main');

    const paginasPistas = ['/sempreteamarei', '/saudade', '/familia'];
    const isPaginasPistas = paginasPistas.includes(location.pathname);

    return(
        <>
            {isPaginasPistas ? <HeaderPista /> : <Header/>}
            <main role="main" className={`${styles.main} ${styles[theme]}`}>
                <Outlet/>
            </main>
            {isPaginasPistas ? <FooterPista /> : <FooterWip/>}
        </>
    );
}

export default PageLayout