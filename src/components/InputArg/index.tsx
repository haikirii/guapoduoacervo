import styles from './index.module.scss';
import { ThemeContext } from '../../contexts/ThemeContext';
import { SetStateAction, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface InputProps {
  placeholder: string;
  aRef: string;
}

const InputArg = (props: InputProps) => {

  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const pass = [
    "cGVycGV0dW8=",
    "cGVycOl0dW8=",
    "UGVycOl0dW8=",
    "UGVycGV0dW8="
  ]

  const [isError, setIsError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const encodedPassword = btoa(password);
    console.log(encodedPassword
    )
    if (pass.includes(encodedPassword)) {
      setIsError(false);
      navigate('/perpetuo');
    } else {
      setIsError(true);
    }
    
  };

  return (
    <>
      <input 
        className={`${styles.senha} ${styles[theme]} ${isError ? styles.erro : ''}`}
        placeholder={props.placeholder}
        onChange={handleInputChange} 
      ></input>

      <button 
        className={`${styles.botaoConfirma} ${styles[theme]}`}
        onClick={handleLogin}>
          <span className={`material-symbols-outlined ${styles.svgMaterial}`}> send </span>  
      </button>
    </>
  )
}

export default InputArg;