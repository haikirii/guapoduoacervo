import { Helmet } from 'react-helmet';
import styles from './index.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Button } from "antd";

const Perpetuo = () => {

    const { theme } = useContext(ThemeContext);
    var data = "Fragmentos outrora dispersos, agora entrelaçados em perfeita fusão. O toque da alquimia os sela, num corpo onde tudo se torna um, indivisível e eterno."
    var url = "https://www.mediafire.com/file/s8v0auopzeyryy9/Laverite.rar/file";

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