import { useContext, useState } from "react";
import styles from "./index.module.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";
import HeaderHomeLink from "./HeaderHomeLink";
import HeaderLinks from "./HeaderLinks";
import HeaderSearch from "./HeaderSearch";
import HeaderAcessar from "./HeaderAcessar";
import HeaderSaludo from "./HeaderSaludo";
import BotaoIcon from "../BotaoIcon";
import HeaderDropdown from "./HeaderDropdown";

interface changeSearchOpen {
  changeOpen: () => void;
}

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const [isSearchOpen, setIsSearchOpen] = useState(true);
  const authContext = useContext(AuthContext);
  {
    /*setIsLogged está sendo usado para debugar a diferença
  de conteúdo logado para deslogado*/
  }
  const { isLogged, setIsLogged } = authContext;

  function changeLogin() {
    setIsLogged(!isLogged);
  }

  function changeOpen() {
    setIsSearchOpen(!isSearchOpen);
  }

  //provisorio
  const imageSrc = "image/about/Faburao-pfp.jpg";
  const nameSrc = "Faburao >w<";

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <div className={`${styles.headerContent} wrapper`}>
        <HeaderHomeLink />
        <HeaderLinks nomePagina="Descubra" link="/t" compOpen={isSearchOpen} />
        <HeaderLinks nomePagina="Fanfics" link="/t" compOpen={isSearchOpen} />
        <HeaderLinks nomePagina="Fanarts" link="/t" compOpen={isSearchOpen} />
        {/*link do sobre só aparece quando não estiver logado*/}
        {!isLogged && (
          <HeaderLinks nomePagina="Sobre" link="/t" compOpen={isSearchOpen} />
        )}
        <HeaderSearch changeOpen={changeOpen} isOpen={isSearchOpen} />
        {/*Botões que só aparecem quando logado*/}
        {/*perfil, bookshelf, notificação, dropdown*/}
        {isLogged ? (
          <>
            <HeaderSaludo pfp={imageSrc} name={nameSrc} profHref={"/t"} />
            <BotaoIcon icon='ol-library'/>
            <BotaoIcon icon='ol-act-notification'/>
            <BotaoIcon icon='ol-act-notification'/>
            {/*<HeaderDropdown />*/}
          </>
        ) : (
          <HeaderAcessar />
        )}
        {isLogged ? <></> : <button onClick={changeLogin}>login</button>}
      </div>
    </header>
  );
};

export default Header;
