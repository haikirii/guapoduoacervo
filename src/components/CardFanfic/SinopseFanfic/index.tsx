import styles from './index.module.scss';

interface SinopseProps {
    sinopse: string;
}

const SinopseFanfic = ({sinopse}: SinopseProps) => {
    return  (
        <div className={styles.sinopse}>
            <p className={styles.fonte}>{sinopse}</p>
        </div>
    );
}

export default SinopseFanfic;