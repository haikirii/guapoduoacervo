import styles from './index.module.scss';
import { BotaoTextoProps } from '../../../types/BotaoTextoType';
import { Link } from 'react-router-dom';

const BotaoDourado = (props: BotaoTextoProps) => {
  return( 
  <Link to={`${props.link}`}>
    <div className={styles.botao}>
      <p className={styles.texto}>{props.texto}</p>
      <i className={`${props.icon} ${styles.icon}`}/>
    </div>
  </Link>
  );
}

export default BotaoDourado;