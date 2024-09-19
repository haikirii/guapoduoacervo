import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import logo from "/image/components/Logo.png";

import styles from "./index.module.scss";

const Footer = () =>{

    const { theme } = useContext(ThemeContext);

    return(
        <footer className={`${styles.footer} ${styles[theme]}`}>
            <div className={`${styles.logoFooter} wrapper`}>
                <div className={styles.logoFooterImg}>
                    <img src={logo} alt="Logo do Acervo Amaranto" />
                </div>
                <div className={styles.logoFooterText}>
                    <span>Acervo</span>
                    <span>Amaranto</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;