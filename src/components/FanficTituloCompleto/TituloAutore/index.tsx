import styles from './index.module.scss';

interface tituloProps {
  titulo: string;
  autore: string;
}

const TituloAutore = (props: tituloProps) => {
  return (
    <h4 className={styles.tituloNome}>
      {props.titulo}, <span className={styles.italic}>por {props.autore}</span>
    </h4>
  )
}

export default TituloAutore;
