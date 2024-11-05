import styles from './index.module.scss';

interface TituloProps {
    titulo: string;
    subtitulo?: string;
}

const TituloPagina = ({titulo, subtitulo}: TituloProps) => {
    return (
        <>
            <h2 className={styles.titulo}>{titulo}</h2>
            <p className={styles.subtitulo}>{subtitulo}</p>
        </>
    );
  }
  
  export default TituloPagina;