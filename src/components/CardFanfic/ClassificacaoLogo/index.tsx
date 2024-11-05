import styles from './index.module.scss';
import { ImagemProps } from '../../../types/ImagemType';

const ClassificacaoLogo = (props: ImagemProps) => {
    return  <img src={props.nomeImagem} alt={props.altImagem} className={styles.imagem} />;
}

export default ClassificacaoLogo;