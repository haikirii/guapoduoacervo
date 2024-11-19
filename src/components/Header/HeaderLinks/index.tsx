import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import styles from "./index.module.scss";

interface LinksProps {
  nomePagina: string;
  link: string;
  compOpen: boolean;
}

//const authContext = useContext(AuthContext);
//const { isLogged, setIsLogged } = authContext;

const HeaderLinks = (props: LinksProps) => {
  return (
    <div className={`${styles.links} ${!props.compOpen ? styles.open : ""}`}>
      <a href={props.link}>{props.nomePagina}</a>
    </div>
  );
};

export default HeaderLinks;
