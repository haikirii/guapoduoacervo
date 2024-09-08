import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import FooterWip from "../../components/FooterWip";
import styles from "./index.module.scss";
import { useContext } from "react";
import { ThemeContext } from '../../contexts/ThemeContext';

const PageLayout = () =>{
    const { theme } = useContext(ThemeContext);

    document.body.classList.add('background-main');

    return(
        <>
            <Header/>
            <main role="main" className={`${styles.main} ${styles[theme]}`}>
                <Outlet/>
            </main>
            <FooterWip/>
        </>
    );
}

export default PageLayout