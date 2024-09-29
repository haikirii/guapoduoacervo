import styles from './index.module.scss';

interface TagProps {
    nomeImagem: string;
    altImagem: string;
}

const CapaAtualizacao = ({ nomeImagem, altImagem }: TagProps) => {
    return <img src={nomeImagem} alt={altImagem} className={styles.imagem} />;
}

export default CapaAtualizacao;
