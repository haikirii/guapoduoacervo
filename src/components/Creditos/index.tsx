import ImagemCreditos from './ImagemCreditos';
import styles from './index.module.scss';
import { CreditosProps } from '../../types/CreditosType';
import { Link } from 'react-router-dom';
import UserCreditos from './UserCreditos';
import FuncaoCreditos from './FuncaoCreditos';

const Creditos = (props: CreditosProps) => {
  return (
    <div className={styles.principal}>
        <ImagemCreditos imagem={props.icon}/>
        <Link to={`${props.link}`} className={`${styles.link} ${props.link ? null : styles.disable}`}>
            <FuncaoCreditos funcao={props.funcao}/>
            <UserCreditos user={props.user}/>
        </Link>
    </div>
  )
}

export default Creditos;