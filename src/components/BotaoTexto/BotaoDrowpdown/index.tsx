import styles from './index.module.scss';
import { BotaoTextoProps } from '../../../types/BotaoTextoType';
import ConteudoDropdown from './ConteudoDropdown';
import '../../../styles/icon/style.css';
import ao3 from '/image/components/ao3-icon.svg';
import spirit from '/image/components/spirit-icon.svg';
import tumblr from '/image/components/tumblr-icon.svg';
import wattpad from '/image/components/wattpad-icon.svg';
import { useState} from 'react';

const BotaoDropdown = (props: BotaoTextoProps) => {

  const [open, setOpen] = useState(false);

  const toggleDropdown = () =>{
    setOpen(open => !open);
  }

  return (
    <div className={styles.principal}>
      <div onClick={toggleDropdown} className={styles.botao}>
        <p className={styles.texto}>{props.texto}</p>
        <i className={props.icon}/>
      </div>
      <div className={`${styles.conteudo} ${open ? styles.active : null}`}>
        <ConteudoDropdown icon={ao3} texto='Archive of our own' open={open} link={'ajdajsd'}/>
        <ConteudoDropdown icon={spirit} texto='Spirit Fanfics' open={open} link={'ajdajsd'}/>
        <ConteudoDropdown icon={wattpad} texto='Wattpad' open={open} link={'ajdajsd'}/>
        <ConteudoDropdown icon={tumblr} texto='Tumblr' open={open} link={'ajdajsd'}/>
      </div>
    </div>
  );
}

export default BotaoDropdown;