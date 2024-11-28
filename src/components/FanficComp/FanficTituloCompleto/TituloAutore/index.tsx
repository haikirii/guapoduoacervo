import styles from './index.module.scss';
import { ThemeContext } from "../../../../contexts/ThemeContext";
import { useContext } from 'react';

interface tituloProps {
  titulo: string;
  autore: string;
}

const TituloAutore = (props: tituloProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <h4 className={`${styles.tituloNome} ${styles[theme]}`}>
      {props.titulo}, <span className={`${styles.italic}`}>por {props.autore}</span>
    </h4>
  )
}

export default TituloAutore;
