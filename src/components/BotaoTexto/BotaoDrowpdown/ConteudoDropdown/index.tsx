import styles from './index.module.scss';
import { BotaoTextoProps } from '../../../../types/BotaoTextoType';
import { Link } from 'react-router-dom';

const ConteudoDropdown = (props: BotaoTextoProps) => {

  return( 
    <Link to={`${props.link}`}>
      <div className={`${styles.conteudo} ${props.open ? styles.active : null}`}>
        <img src={props.icon} className={styles.icon}/>
        <p className={styles.texto}>{props.texto}</p>
      </div>
    </Link>
  );
}

export default ConteudoDropdown;