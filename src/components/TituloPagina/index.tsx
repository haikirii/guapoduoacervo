import styles from './index.module.scss';

interface TituloProps {
    titulo: string;
    subtitulo?: string;
}

const TituloPagina = ({titulo, subtitulo}: TituloProps) => {
    return (
        <>
            <h1 className={styles.titulo}>{titulo}</h1>
            <h2 className={styles.subtitulo}>{subtitulo}</h2>
        </>
    );
  }
  
  export default TituloPagina;