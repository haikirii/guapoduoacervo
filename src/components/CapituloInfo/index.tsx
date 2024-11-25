import styles from './index.module.scss';
import { CapituloInfoProps } from '../../types/CapituloInfoType';
import '../../styles/icon/style.css';
import InfoFanfic from '../CardFanfic/InfoFanfic';

const CapituloInfo = (props: CapituloInfoProps) => {
  let aux = '';
  if(props.numeroCap < 10){
    aux = '0';
  }
  return (
    <div className={styles.principal}>
      <div className={styles.texto}>
        <p className={styles.numero}>#{`${aux}${props.numeroCap}`}</p>
        <p className={styles.titulo}>{props.titulo}</p>
      </div>
      <div className={styles.tamanho}>
        <InfoFanfic icon={'ol-history'} infoString={props.data} />
        <InfoFanfic icon={'ol-heart'} infoNumber={256}/>
      </div>
    </div>
  )
}

export default CapituloInfo;