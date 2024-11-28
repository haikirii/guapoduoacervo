import styles from './index.module.scss';
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useContext } from 'react';

interface numeroTituloProps {
  numero: number
  tituloCap: string
}

function formatNumber(num: number) {
  if(num < 10) {
    return "0" + String(num)
  }
  return num
}

const NumeroTituloFic = (props: numeroTituloProps) => {
  const { theme } = useContext(ThemeContext);'./index.module.scss';
  return (
    <h3 className={`${styles.numTitleCap} ${styles[theme]}`}>
      {formatNumber(props.numero)}.{props.tituloCap}
    </h3> 
  )
}

export default NumeroTituloFic;
