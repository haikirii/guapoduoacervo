import { useContext, useState } from "react";
import styles from "./index.module.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import HeaderHomeLink from "./HeaderHomeLink";
import HeaderLinks from "./HeaderLinks";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const [isSearchOpen, setIsSearchOpen] = useState(true);

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <div className={`${styles.headerContent} wrapper`}>
        <HeaderHomeLink />

        {isSearchOpen && (
          <>
            <HeaderLinks nomePagina="Descubra" link="/t" />
            <HeaderLinks nomePagina="Fanfics" link="/t" />
            <HeaderLinks nomePagina="Fanarts" link="/t" />
          </>
        )}

        <HeaderSearch onToggle={setIsSearchOpen} />
      </div>
    </header>
  );
};

export default Header;
