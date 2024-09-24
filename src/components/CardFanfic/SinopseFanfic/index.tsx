import styles from './index.module.scss';

interface SinopseProps {
    texto: string;
}

const SinopseFanfic = ({texto}: SinopseProps) => {
    return  (
        <div className={styles.alinhaSinopse}>
            <p className={styles.sinopseFonte}>{texto}</p>
        </div>
    );
}

export default SinopseFanfic;