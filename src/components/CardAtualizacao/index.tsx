import styles from './index.module.scss';
import Capa from '/temp/capa.jpg';
import BotaoAtualizacao from './BotaoAtualizacao';
import CapaAtualizacao from './CapaAtualizacao';
import TituloAtualizacao from './TituloAtualizacao';

import { CardAtualizacaoProps } from '../../types/CardAtualizacaoType';

const CardAtualizacao = (props: CardAtualizacaoProps) => {
    return  (
        <div className={styles.principal}>
            <CapaAtualizacao nomeImagem={props.pathCapa} altImagem={props.altCapa ? props.altCapa : `Capa de ${props.titulo}`}/>
            <div className={styles.background}>
                <div className={styles.alinhaConteudo}>
                    <TituloAtualizacao texto={props.titulo}/>
                    <p className={styles.atualizacao}>{props.novoCap ? "Novo capítulo!" : "Lançamento!"}</p>
                    <div className={styles.alinhaBotao}>
                        <BotaoAtualizacao texto='Ler agora' linkFanfic={props.linkFanfic}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardAtualizacao;
