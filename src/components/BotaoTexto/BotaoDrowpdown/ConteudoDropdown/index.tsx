import styles from './index.module.scss';
import { BotaoTextoProps } from '../../../../types/BotaoTextoType';

const ConteudoDropdown = (props: BotaoTextoProps) => {

  return <a href={props.link}><span className={styles.dropdown}>{props.texto}<img src={props.icon}></img></span></a>;
}

export default ConteudoDropdown;