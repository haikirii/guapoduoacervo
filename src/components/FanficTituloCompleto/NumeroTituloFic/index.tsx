import styles from './index.module.scss';

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
  return (
    <h3 className={styles.numTitleCap}>
      {formatNumber(props.numero)}.{props.tituloCap}
    </h3> 
  )
}

export default NumeroTituloFic;
