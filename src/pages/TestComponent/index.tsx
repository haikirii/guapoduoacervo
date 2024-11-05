
import BotaoTexto from '../../components/BotaoTexto';
import styles from './index.module.scss';
import InteracaoBotaoFanfic from '../../components/InteracaoBotaoFanfic';
import AtualizacaoListagem from '../../components/CardAtualizacao';
import Capa from '/temp/capa.jpg'
import CardFanfic from '../../components/CardFanfic';
import Classificacao from '/image/classificacao/classificacao-16-anos-logo.png';
import '../../styles/icons/style.css';

const TestComponent = () => {
  return (
    <div className={styles.fundo}>
      <BotaoTexto/>
    </div>
  )
}

export default TestComponent;
