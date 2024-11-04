import styles from './index.module.scss';

interface TituloProps {
    texto: string;
}

const TituloAtualizacao = ({texto}: TituloProps) => {
    return  (
        <h3 className={styles.titulo}>{texto}</h3>
    )
    ;
}

export default TituloAtualizacao;