import styles from './index.module.scss';

interface AutoreProps {
    user: string;
}

const AutoreFanfic = ({user}: AutoreProps) => {
    return  (
        <div className={styles.alinhamentotitulo}>
            <p className={styles.titulo}>por {user}</p>
        </div>
    )
    ;
}

export default AutoreFanfic;