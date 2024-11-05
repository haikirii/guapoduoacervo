import styles from './index.module.scss';
import { CardFanficLinkType } from '../../../types/CardFanficLinkType';

const Tag = (props: CardFanficLinkType) => {
    return  <a href={props.link}><span className={styles.tags}>{props.texto}</span></a>;
}

export default Tag;