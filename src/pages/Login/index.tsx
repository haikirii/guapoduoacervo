import { useContext, useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import Plantando from '../../components/Plantando';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './index.module.scss';

const Login = () => {
  const { theme } = useContext(ThemeContext);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    })
  }

  useEffect(() => {
    // Adiciona o listener do mousemove
    document.addEventListener('mousemove', handleMouseMove);

    // Remove o listener quando o componente desmonta
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const style = {
    '--Xpos': `${mousePosition.x}px`,
    // eu nao sei pq mas ele ta puxando 60px pra baixo
    '--Ypos': `${mousePosition.y}px`,
  } as React.CSSProperties;

  const styleClipPath = {
    clipPath: `circle(40px at ${mousePosition.x}px ${mousePosition.y}px)`,
  }

  const data = {
    title: "Nada por aqui",
    texto: "... se sente amado em meio a imensidão do tempo... Como nunca se sentiu antes."
  }

  return (
    <>
      <Helmet> <title> Login </title> </Helmet>

      <main className={`${styles.main} ${styles[theme]}`}>

        <Plantando
          title={data.title}
          texto={data.texto}
        >
          <input 
            className={styles.senha}
            placeholder="Insira a senha"
          ></input>
          
          <a href='../../../public/temp/laverite.rar' download className={styles.botaoConfirma}> 
            <span className="material-symbols-outlined"> 
              send 
            </span>  
          </a>

        </Plantando>

          <div className={styles.one} style={style}></div>     
          <div className={styles.mainImage}
            style={styleClipPath}
          ></div>

      </main>

    </>
  )
}

export default Login;