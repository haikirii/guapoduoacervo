import styles from './index.module.scss';

interface FuncaoCreditosProps{
    funcao: string;
}

const FuncaoCreditos = ({funcao}: FuncaoCreditosProps) => {
  return (
    <p className={styles.funcao}>{funcao}</p>
  )
}

export default FuncaoCreditos;