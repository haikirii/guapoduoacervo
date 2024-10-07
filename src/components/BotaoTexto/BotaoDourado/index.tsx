import styles from './index.module.scss';
import { BotaoTextoProps } from '../../../types/BotaoTextoType';
import '../../../styles/icon/style.css';

const BotaoDourado = (props: BotaoTextoProps) => {
  return <a href={props.link}><button className={styles.botao}>{props.texto}<i className={props.icon}/></button></a>;
}

export default BotaoDourado;