import styles from './index.module.scss';
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from 'react';

interface TituloFanartProps{
  titulo: string;
}

const TituloFanart = ({titulo}: TituloFanartProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <h2 className={`${styles.titulo} ${styles[theme]}`}>{titulo}</h2>
  )
}

export default TituloFanart;