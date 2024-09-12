import { Helmet } from 'react-helmet';
import styles from './index.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Button } from "antd";
import lente from '/image/guapoduo/lente.png?url';
import { Link } from 'react-router-dom';

const Perpetuo = () => {

    const { theme } = useContext(ThemeContext);
    var data = "Algum texto de pista para indicar a senha do .rar, que será: 'amalgamado'"
    var url = "https://www.mediafire.com/file/t6c70ek32e8uzcd/laverite.rar/file";

    const handleRedirect = () => {
      window.open(url, '_blank');
    };

  return (
    <>
      <Helmet> <title>Plantando Amarantos</title> </Helmet>
       
        <div className={styles.container}>
            <span className={styles.glitch} data-text={data}> {data} </span>         
        </div>

        <div className={styles.container}>
          <Button type="text" onClick={handleRedirect} className={styles.botaoDownload}>
            <span className={`material-symbols-outlined ${styles.svgMaterial} ${styles[theme]} ${styles.glitch}`} data-text="download"> download </span>  
          </Button>
        </div>
    </>
  )
}

export default Perpetuo;