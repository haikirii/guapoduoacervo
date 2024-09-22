import SinopseFanfic from '../SinopseFanfic';
import Tag from '../Tag';
import TituloFanfic from '../TituloFanfic';
import styles from './index.module.scss';
import '../../../stylus/index.scss';
import Classificacao from '../../../../public/image/classificacao/classificacao-12-anos-logo.png';
import Capa from '../../../../public/temp/capa.jpg';
import ClassificacaoLogo from '../ClassificacaoLogo';
import CapaFanfic from '../CapaFanfic';
import AutoreFanfic from '../AutoreFanfic';
import InfoFanfic from '../InfoFanfic';
import dataIcon from '../../../../public/image/components/data-icon.png';
import capIcon from '../../../../public/image/components/cap-icon.png';
import comentarioIcon from '../../../../public/image/components/caneta-icon.png';

const FanficListagem = () => {
    return  (
        <div className={styles.principal}>
            <div className={styles.alinhaImagem}>
                <CapaFanfic nomeImagem={Capa} altImagem='Capa the reason'/>
            </div>
            <div className={styles.background}>
                <div className={styles.alinhaConteudo}>
                    <div className={styles.alinhaTitulo}>
                        <TituloFanfic texto="The reason"/>
                        <ClassificacaoLogo nomeImagem={Classificacao}/>
                    </div>
                    <div className={styles.linha}></div>
                    <AutoreFanfic user="Nan_Yelo"/>
                    <div className={styles.alinhaInfo}>
                        <InfoFanfic imagem={dataIcon} info="aug/2023" />
                        <InfoFanfic imagem={capIcon} info="19/?" />
                        <InfoFanfic imagem={comentarioIcon} info={"138"} />
                    </div>
                    <SinopseFanfic texto="Vazio. Tédio. Insatisfação. Isso era tudo que ele sentia, e só precisava de uma distração... O que ele não esperava, no entanto, é que essa distração viria na forma de um lindo mexicano que estava prestes a endireitar sua vida torta para sempre."/>
                    <div className={styles.alinhaTag}>
                            <Tag texto='Happy Ending'/>
                            <Tag texto='Alcatraz'/>
                            <Tag texto='Canon Divergent'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FanficListagem;