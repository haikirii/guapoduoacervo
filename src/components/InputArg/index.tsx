import styles from './index.module.scss';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

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

      <Link className= {styles.botaoConfirma} to='/perpetuo'> 
        <span className={`material-symbols-outlined ${styles.svgMaterial}`}> send </span>  
      </Link> 
    </>
  )
}

export default InputArg;