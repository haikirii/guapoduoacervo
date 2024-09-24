import styles from './index.module.scss';

interface TagProps {
    nomeImagem: string;
    altImagem: string;
}

const ClassificacaoLogo = ({nomeImagem, altImagem}: TagProps) => {
    return  <img src={nomeImagem} alt={altImagem} className={styles.imagem} />;
}

export default ClassificacaoLogo;