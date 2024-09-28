import '../../styles/icons/style.css';
import styles from './index.module.scss';
import InteracaoBotaoFanfic from '../../components/InteracaoBotaoFanfic';
import BotaoIcon from '../../components/InteracaoBotaoFanfic/BotaoIcon';

const TestComponent = () => {
  return (
    <div className={styles.fundo}>
     <InteracaoBotaoFanfic/>
    </div>
  )
}

export default TestComponent;
