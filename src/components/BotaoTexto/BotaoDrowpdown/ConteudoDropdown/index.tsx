import styles from './index.module.scss';
import { BotaoTextoProps } from '../../../../types/BotaoTextoType';
import { Link } from 'react-router-dom';
import '../../../../styles/icon/style.css';

const ConteudoDropdown = (props: BotaoTextoProps) => {

  return( 
    <Link to={`${props.link}`}>
      <div className={`${styles.conteudo} ${props.open ? styles.active : null}`}>
        <i className={`${props.icon} ${styles.icon}`}/>
        <p className={styles.texto}>{props.texto}</p>
      </div>
    </Link>
  );
}

export default ConteudoDropdown;