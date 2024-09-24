import styles from './index.module.scss';

interface AutoreProps {
    user: string;
}

const AutoreFanfic = ({user}: AutoreProps) => {
    return  (
        <div className={styles.alinhaNome}>
            <p className={styles.nomeFonte}>por {user}</p>
        </div>
    )
    ;
}

export default AutoreFanfic;