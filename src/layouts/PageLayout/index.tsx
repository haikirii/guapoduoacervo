import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./index.module.scss";
import { useContext } from "react";
import { ThemeContext } from '../../contexts/ThemeContext';

//Excluir depois
import FooterWip from "../../components/FooterWip";
import HeaderWip from "../../components/HeaderWip";

const PageLayout = () =>{
    const { theme } = useContext(ThemeContext);
    const location = useLocation();

    document.body.classList.add('background-main');

    const paginasPistas = ['/sempreteamarei', '/saudade', '/familia'];
    const isPaginasPistas = paginasPistas.includes(location.pathname);

    return(
        <>
            <Header/>
            <main role="main" className={`${styles.main} ${styles[theme]}`}>
                <Outlet/>
            </main>
            <FooterWip />
        </>
    );
}

export default PageLayout
