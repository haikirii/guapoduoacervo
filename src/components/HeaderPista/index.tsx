import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import logo from "/image/components/Logo.png";
import { ThemeContext } from "../../contexts/ThemeContext";
import BotaoMudarTema from "../BotaoMudarTema";

const Header = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <div className={`${styles.headerContent} wrapper`}>
        <div className={styles.logoHeader}>
          <div className={styles.logoHeaderImg}>
            <img src={logo} alt="Logo do Acervo Amaranto" />
          </div>
          <div className={styles.logoHeaderText}>
            <Link to="/">Acervo Amaranto</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
