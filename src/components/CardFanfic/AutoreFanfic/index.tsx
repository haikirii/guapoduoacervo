import styles from './index.module.scss';
import { CardFanficLinkType } from '../../../types/CardFanficLinkType';

const AutoreFanfic = (props: CardFanficLinkType) => {
    return  (
        <div className={styles.alinhamento}>
           <a href={props.link}> <p className={styles.fonte}>por {props.texto}</p></a>
        </div>
    )
    ;
}

export default AutoreFanfic;