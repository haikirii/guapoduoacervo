import styles from './index.module.scss';

interface TituloProps {
    texto: string;
}

const TituloFanfic = ({texto}: TituloProps) => {
    return  (
        <div className={styles.alinhamentotitulo}>
            <h1 className={styles.titulo}>{texto}</h1>
        </div>
    )
    ;
}

export default TituloFanfic;