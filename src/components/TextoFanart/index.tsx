import styles from './index.module.scss';
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from 'react';

interface TextoFanartProps{
  texto: string;
}

const TextoFanart = ({texto}: TextoFanartProps) => {
  const { theme } = useContext(ThemeContext);
  const aux = texto.split('\n');

  return (
    <div>
      {aux.map((item: string , index: number) => (
        <p key={index} className={`${styles.texto} ${styles[theme]}`}>{aux[index]}</p>
      ))}
    </div>
  )
}

export default TextoFanart;