import styles from './index.module.scss';

interface TagProps {
    texto: string;
}

const BotaoAtualizacao = ({texto}: TagProps) => {
    return <button className={styles.botao}>{texto}</button>;
}

export default BotaoAtualizacao;