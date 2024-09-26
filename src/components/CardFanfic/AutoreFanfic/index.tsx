import styles from './index.module.scss';

interface AutoreProps {
    user: string;
}

const AutoreFanfic = ({user}: AutoreProps) => {
    return  (
        <div className={styles.alinhamento}>
            <p className={styles.fonte}>por {user}</p>
        </div>
    )
    ;
}

export default AutoreFanfic;