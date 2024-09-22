import styles from './index.module.scss';

interface TituloProps {
    texto: string;
}

const TituloFanfic = ({texto}: TituloProps) => {
    return  (
        <div className={styles.alinhamentotitulo}>
            <h3 className={styles.titulo}>{texto}</h3>
        </div>
    )
    ;
}

export default TituloFanfic;