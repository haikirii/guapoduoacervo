import styles from './index.module.scss';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from 'react';

interface InputProps {
  placeholder: string;
  aRef: string;
}

const InputArg = (props: InputProps) => {

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <input 
        className={`${styles.senha} ${styles[theme]}`}
        placeholder={props.placeholder}
      ></input>
      
      <a  href='../../../public/temp/laverite.rar' 
          download 
          className={`${styles.botaoConfirma} ${styles[theme]}`}
      > 
        <span className={`material-symbols-outlined ${styles.svgMaterial}`}> 
          send 
        </span>  
      </a>
    </>
  )
}

export default InputArg;