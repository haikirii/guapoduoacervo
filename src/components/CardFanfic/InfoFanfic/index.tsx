import styles from './index.module.scss';
import IconInfo from '../IconInfo';

interface InfoProps {
    imagem: string;
    info: string;
}

const InfoFanfic = ({imagem, info}: InfoProps) => {
    return  (
        <div className={styles.alinhaInfo}>
            <IconInfo nomeImagem={imagem}/><p className={styles.texto}>{info}</p>
        </div>
    );
}

export default InfoFanfic;