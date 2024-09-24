import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import logo from "/image/components/Logo.png";

import styles from "./index.module.scss";

const FooterWip = () =>{

    const { theme } = useContext(ThemeContext);

    return(
        <footer className={`${styles.footer} ${styles[theme]}`}>
            <div className="wrapper">
            <div className={styles.logoFooter}>
                <div className={styles.logoFooterImg}>
                    <img src={logo} alt="Logo do Acervo Amaranto" />
                </div>
                <div className={styles.logoFooterText}>
                    <span>Acervo</span>
                    <span>Amaranto</span>
                </div>
            </div>
            
            </div>
        </footer>
    );
}

export default FooterWip;