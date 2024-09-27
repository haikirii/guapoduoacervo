import BotaoIcon from '../../components/BotaoIcon';
import styles from './index.module.scss';
import '../../styles/icons/style.css';

const TestComponent = () => {
  return (
    <>
      <div className={styles.fundo}>
        <BotaoIcon icon='ol-heart'/>
        <BotaoIcon icon='ol-library'/>
        <BotaoIcon icon='ol-bookmark'/>
        <BotaoIcon icon='ol-act-notification'/>
      </div>
    </>
  )
}

export default TestComponent;