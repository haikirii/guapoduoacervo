import styles from './index.module.scss';
import IconInfo from '../IconInfo';

interface InfoProps {
    imagem: string;
    info: string;
    altIcon: string;
}

const InfoFanfic = ({imagem, info, altIcon}: InfoProps) => {
    return  (
        <div className={styles.alinhaInfo}>
            <IconInfo nomeImagem={imagem} altIcon={altIcon}/><p className={styles.infoFonte}>{info}</p>
        </div>
    );
}

export default InfoFanfic;