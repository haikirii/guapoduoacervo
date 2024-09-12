import styles from './index.module.scss';

interface TagProps {
    nomeImagem: string;
}

const IconInfo = ({nomeImagem}: TagProps) => {
    return  <img src={nomeImagem} alt="Logo do Acervo Amaranto" className={styles.imagem} />;
}

export default IconInfo;