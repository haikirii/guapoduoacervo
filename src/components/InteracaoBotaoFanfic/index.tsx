import BotaoIcon from '../BotaoIcon';
import BotaoTexto from '../BotaoTexto';
import styles from './index.module.scss';


const InteracaoBotaoFanfic = () => {
    return(
        <div className={styles.principal}>
            <div className={styles.interacao}>
                <BotaoIcon icon='ol-heart'/>
                <BotaoIcon icon='ol-file-tray'/>
                <BotaoIcon icon='ol-bookmark'/>
                <BotaoIcon icon='ol-act-notification'/>
            </div>
            <div className={styles.texto}>
                <BotaoTexto/>
            </div>
        </div>
    );
}

export default InteracaoBotaoFanfic;