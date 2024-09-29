import SinopseFanfic from './SinopseFanfic';
import Tag from './Tag';
import TituloFanfic from './TituloFanfic';
import styles from './index.module.scss';
import '../../styles/index.scss';
import ClassificacaoLogo from './ClassificacaoLogo';
import CapaFanfic from './CapaFanfic';
import AutoreFanfic from './AutoreFanfic';
import InfoFanfic from './InfoFanfic';

import { CardFanficListagemProps } from '../../types/CardFanficListagemType';

const CardFanfic = (props: CardFanficListagemProps) => {
    return  (
        <div className={styles.principal}>
            <div className={styles.capa}>
                <CapaFanfic nomeImagem={props.pathCapa} altImagem="Capa the reason"/>
            </div>
            <div className={styles.background}>
                <div className={styles.conteudo}>
                    <div className={styles.titulo}>
                        <TituloFanfic texto={props.titulo} link={props.linkFanfic}/>
                        <ClassificacaoLogo nomeImagem={props.pathClassificacao} altImagem={props.altClassificação}/>
                    </div>
                    <div className={styles.linha}></div>
                    <AutoreFanfic texto={props.autore} link={props.linkAutore}/>
                    <div className={styles.info}>
                        <InfoFanfic icon='ol-history' infoString={props.data}/>
                        <InfoFanfic icon='ol-book' infoString={props.capitulo}/>
                        <InfoFanfic icon='ol-pencil' infoNumber={props.comentario}/>
                    </div>
                    <SinopseFanfic sinopse={props.sinopse}/>
                    <div className={styles.tag}>
                            <Tag texto='Happy Ending' link='asdasdfa'/>
                            <Tag texto='Alcatraz' link='aasdasda'/>
                            <Tag texto='Canon Divergent' link='asdhasda'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardFanfic;