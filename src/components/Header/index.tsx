import { useContext, useState } from "react";
import styles from "./index.module.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import HeaderHomeLink from "./HeaderHomeLink";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <div className={`${styles.headerContent} wrapper`}>
        <HeaderHomeLink />

        {isSearchOpen ?
          ( <p>aberto</p> )
        :
          ( <p>fechado</p> )
        }

        <HeaderSearch onToggle={setIsSearchOpen} />
      </div>
    </header>
  );
};

export default Header;
