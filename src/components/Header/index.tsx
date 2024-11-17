import { useContext } from "react";
import styles from "./index.module.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import HeaderHomeLink from "./HeaderHomeLink";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <div className={`${styles.headerContent} wrapper`}>
        <HeaderHomeLink />
        <HeaderSearch />
      </div>
    </header>
  );
};

export default Header;
