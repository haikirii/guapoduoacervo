import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './index.module.scss';
import { useContext, useEffect, useState } from "react";
import guapoduo from '/public/temp/guapo-duo-temp.png';

const ConteudoWip = () => {

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
    '--Ypos': `${mousePosition.y - 60}px`,
  } as React.CSSProperties;

  const styleClipPath = {
    clipPath: `circle(40px at ${mousePosition.x}px ${mousePosition.y - 60}px)`,
  }

  return (
    <main className={`${styles.main} ${styles[theme]}`}>
      <div className={styles.one} style={style}></div>
      <div className={styles.mainImage}
      style={styleClipPath}
      ></div>
      <img src={guapoduo} alt="guapoduo" />
      <div className={styles.caixaTexto}>
        <span>
          Nada por aqui
        </span>
        <br />
        <span>
          Ainda estamos plantando as sementes de amaranto...
        </span>
      </div>
    </main>
  )
}

export default ConteudoWip;