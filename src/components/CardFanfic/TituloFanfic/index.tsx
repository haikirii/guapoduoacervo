import styles from './index.module.scss';
import { CardFanficLinkType } from '../../../types/CardFanficLinkType';

const TituloFanfic = (props: CardFanficLinkType) => {
    return  (
        <div className={styles.alinhamento}>
            <a href={props.link}><h3 className={styles.titulo}>{props.texto}</h3></a>
        </div>
    )
    ;
}

export default TituloFanfic;