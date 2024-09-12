import { Helmet } from 'react-helmet';
import FanficListagem from '../../components/CardFanfic/FanficListagem';
import styles from './index.module.scss';

const Wip = () => {
  return (
    <>
      <Helmet>
        <title>Plantando Amarantos</title>
      </Helmet>
      <div className={styles.card}>
        <FanficListagem/>
        <FanficListagem/>
      </div>
     </>
  )
}

export default Wip;
