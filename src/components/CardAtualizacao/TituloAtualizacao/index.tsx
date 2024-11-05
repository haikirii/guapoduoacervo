import styles from './index.module.scss';

interface TituloProps {
    texto: string;
}

const TituloAtualizacao = ({texto}: TituloProps) => {
    return  (
        <h4 className={styles.titulo}>{texto}</h4>
    );
}

export default TituloAtualizacao;
