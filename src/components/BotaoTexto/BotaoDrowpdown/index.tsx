import styles from './index.module.scss';
import { BotaoTextoProps } from '../../../types/BotaoTextoType';
import ConteudoDropdown from './ConteudoDropdown';
import '../../../styles/icon/style.css';
import ao3 from '/image/components/ao3-icon.svg';
import spirit from '/image/components/spirit-icon.svg';
import tumblr from '/image/components/tumblr-icon.svg';
import wattpad from '/image/components/wattpad-icon.svg';

const BotaoDropdown = (props: BotaoTextoProps) => {

  return (
  <a href={props.link}>
    <span className={styles.dropdown}>{props.texto}
      <i className={props.icon}/>
      <div className={styles.conteudo}>
        <ConteudoDropdown texto={'Archive of our own'} icon={ao3} link={'adsffa'} />
        <ConteudoDropdown texto={'Spirit Fanfic'} icon={spirit} link={'adsffa'} />
        <ConteudoDropdown texto={'Tumblr'} icon={tumblr} link={'adsffa'} />
        <ConteudoDropdown texto={'Wattpad'} icon={wattpad} link={'adsffa'} />
      </div>
    </span>
  </a>);
}

export default BotaoDropdown;