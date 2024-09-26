import styles from './index.module.scss';
import IconInfo from '../IconInfo';

interface InfoProps {
    imagem: string;
    info: string;
    altIcon: string;
}

const InfoFanfic = ({imagem, info, altIcon}: InfoProps) => {
    return  (
        <div className={styles.alinhamento}>
            <IconInfo nomeImagem={imagem} altIcon={altIcon}/><p className={styles.fonte}>{info}</p>
        </div>
    );
}

export default InfoFanfic;