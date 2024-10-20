import styles from './index.module.scss';
import { BotaoTextoProps } from '../../../types/BotaoTextoType';
import ConteudoDropdown from './ConteudoDropdown';
import '../../../styles/icon/style.css';
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
        <i className={`${props.icon} ${styles.icon}`}/>
      </div>
      <div className={`${styles.conteudo} ${open ? styles.active : null}`}>
        <ConteudoDropdown icon={'logo-ao3'} texto='Archive of our own' open={open} link={'ajdajsd'}/>
        <ConteudoDropdown icon={'logo-spirit'} texto='Spirit Fanfics' open={open} link={'ajdajsd'}/>
        <ConteudoDropdown icon={'logo-wattpad'} texto='Wattpad' open={open} link={'ajdajsd'}/>
        <ConteudoDropdown icon={'logo-tumblr'} texto='Tumblr' open={open} link={'ajdajsd'}/>
      </div>
    </div>
  );
}

export default BotaoDropdown;