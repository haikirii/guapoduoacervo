import styles from './index.module.scss';

interface SinopseProps {
    texto: string;
}

const SinopseFanfic = ({texto}: SinopseProps) => {
    return  (
        <div className={styles.alinhamentosinopse}>
            <h1 className={styles.teste}>{texto}</h1>
        </div>
    );
}

export default SinopseFanfic;