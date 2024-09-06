import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './index.module.scss';
import { useContext } from "react";
import guapoduo from '/public/temp/guapo-duo-temp.png';

const ConteudoWip = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <main className={`${styles.main} ${styles[theme]}`}>
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