import styles from './index.module.scss';

interface SinopseProps {
    texto: string;
}

const SinopseFanfic = ({texto}: SinopseProps) => {
    return  (
        <div className={styles.sinopse}>
            <p className={styles.fonte}>{texto}</p>
        </div>
    );
}

export default SinopseFanfic;