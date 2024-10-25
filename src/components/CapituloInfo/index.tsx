import styles from './index.module.scss';
import { CapituloInfoProps } from '../../types/CapituloInfoType';

const CapituloInfo = (props: CapituloInfoProps) => {
  return (
    <div className={styles.principal}>
      <p className={styles.numero}>{props.numero}</p>
      <p className={styles.titulo}>{props.titulo}</p>
      <p className={styles.data}>{props.data}</p>
      <div className={styles.cutidas}>
        <i className={props.icon}/>
        <p className={styles.quantidade}>{props.curtida}</p>
      </div>
    </div>
  )
}

export default CapituloInfo;