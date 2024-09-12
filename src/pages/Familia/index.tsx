import { Helmet } from 'react-helmet';
import aquilo from '/image/iefgda/Richas FAMÍLIA.png?url';
import styles from './index.module.scss';
const SempreTeAmarei = () => {

  return (
    <>
      <Helmet> <title> Família </title> </Helmet>
      <div className={styles.container} >
        <img src={aquilo} className={styles.imagem} alt="guapoduo" />
      </div>
    </>
  )
}

export default SempreTeAmarei;