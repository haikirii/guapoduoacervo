import styles from './index.module.scss';
import { CardFanficLinkType } from '../../../types/CardFanficLinkType';

const BotaoAtualizacao = (props: CardFanficLinkType) => {
    return <a href={props.link}><button className={styles.botao}>{props.texto}</button></a>;
}

export default BotaoAtualizacao;