import styles from './index.module.scss';
import BotaoDropdown from './BotaoDrowpdown';
import BotaoOutline from './BotaoOutline';
import BotaoDourado from './BotaoDourado';

const BotaoTexto = () => {
  return (
      <div className={styles.principal}>
          <BotaoDropdown texto={'Disponível em'} icon={'ol-chevron-down'} link={'asdasdasd'} />
          <div className={styles.direita}>
            <BotaoOutline texto={'Recomeçar'} icon={'ol-chevron-up'} link={'gsfdgsvc'}/>
            <BotaoDourado texto={'Continuar'} icon={'ol-chevron-forward'} link={'qkwjedkqw'}/>
          </div>
      </div>
  );
}

export default BotaoTexto;