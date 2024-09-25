import BotaoIcon from '../../components/BotaoIcon';
import coracao from '../../../public/image/components/coracao-icon.svg';
import sino from '../../../public/image/components/sino-icon.svg';
import bookmark from '../../../public/image/components/bookmark-icon.svg';
import biblioteca from '../../../public/image/components/biblioteca-icon.svg'
import styles from './index.module.scss';

const TestComponent = () => {
  return (
    <>
      <div className={styles.fundo}>
        <BotaoIcon icon={coracao} altImagem="Curtir"/>
        <BotaoIcon icon={biblioteca} altImagem="Adicionar à biblioteca"/>
        <BotaoIcon icon={bookmark} altImagem="Adicionar ao bookmark"/>
        <BotaoIcon icon={sino} altImagem="Ativar notificações"/>
      </div>
    </>
  )
}

export default TestComponent;