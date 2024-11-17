import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";

const HeaderHomeLink = () => {
  return (
    <div className={styles.headerLogo}>
      <Link
        to="/"
        className={styles.linkLogo}
        aria-label="Página Inicial - Acervo Amaranto"
      >
        <h1 className={styles.logoTexto}>
          <HeaderLogo />
        </h1>
      </Link>
    </div>
  );
};

export default HeaderHomeLink;
