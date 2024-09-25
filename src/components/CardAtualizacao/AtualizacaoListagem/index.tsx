import styles from './index.module.scss';
import '../../../styles/index.scss';
import Capa from '../../../../public/temp/capa.jpg';
import BotaoAtualizacao from '../BotaoAtualizacao';
import CapaAtualizacao from '../CapaAtualizacao';
import TituloAtualizacao from '../TituloAtualizacao';

interface AtualizacaoProps {
    tipoAtualizacao: string;
}

const AtualizacaoListagem = ({tipoAtualizacao}: AtualizacaoProps) => {
    return  (
        <div className={styles.principal}>
            <CapaAtualizacao nomeImagem={Capa} altImagem="Capa the reason"/>
            <div className={styles.background}>
                <div className={styles.alinhaConteudo}>
                    <TituloAtualizacao texto="The reason"/>
                    <p className={styles.atualizacao}>{tipoAtualizacao}</p>
                    <div className={styles.alinhaBotao}>
                        <BotaoAtualizacao texto='Ler agora'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AtualizacaoListagem;