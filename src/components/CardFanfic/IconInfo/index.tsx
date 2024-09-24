import styles from './index.module.scss';

interface TagProps {
    nomeImagem: string;
    altIcon: string;
}

const IconInfo = ({nomeImagem, altIcon}: TagProps) => {
    return  <img src={nomeImagem} alt={altIcon} className={styles.imagem} />;
}

export default IconInfo;