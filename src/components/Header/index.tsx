import { useContext, useState } from "react";
import styles from "./index.module.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";
import HeaderHomeLink from "./HeaderHomeLink";
import HeaderLinks from "./HeaderLinks";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const [isSearchOpen, setIsSearchOpen] = useState(true);
  const authContext = useContext(AuthContext);
  {/*setIsLogged está sendo usado para debugar a diferença
  de conteúdo logado para deslogado*/}
  const { isLogged, setIsLogged } = authContext;

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <div className={`${styles.headerContent} wrapper`}>
        <HeaderHomeLink />

        {isSearchOpen && (
          <>
            <HeaderLinks nomePagina="Descubra" link="/t" />
            <HeaderLinks nomePagina="Fanfics" link="/t" />
            <HeaderLinks nomePagina="Fanarts" link="/t" />
            {isLogged && <HeaderLinks nomePagina="logado" link="/t" />}
          </>
        )}

        <HeaderSearch onToggle={setIsSearchOpen} />
        {isLogged ? <h1>logado</h1> : <h1>deslogado</h1>}
      </div>
    </header>
  );
};

export default Header;
