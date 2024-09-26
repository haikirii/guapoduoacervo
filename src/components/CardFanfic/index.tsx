import SinopseFanfic from './SinopseFanfic';
import Tag from './Tag';
import TituloFanfic from './TituloFanfic';
import styles from './index.module.scss';
import '../../styles/index.scss';
import Classificacao from '/image/classificacao/classificacao-16-anos-logo.png';
import Capa from '/temp/capa.jpg';
import ClassificacaoLogo from './ClassificacaoLogo';
import CapaFanfic from './CapaFanfic';
import AutoreFanfic from './AutoreFanfic';
import InfoFanfic from './InfoFanfic';
import dataIcon from '/image/components/data-icon.svg';
import capIcon from '/image/components/cap-icon.svg';
import comentarioIcon from '/image/components/caneta-icon.svg';

const CardFanfic = () => {
    return  (
        <div className={styles.principal}>
            <div className={styles.capa}>
                <CapaFanfic nomeImagem={Capa} altImagem="Capa the reason"/>
            </div>
            <div className={styles.background}>
                <div className={styles.conteudo}>
                    <div className={styles.titulo}>
                        <TituloFanfic texto="The reason"/>
                        <ClassificacaoLogo nomeImagem={Classificacao} altImagem="Classificado para maiores de 10 anos."/>
                    </div>
                    <div className={styles.linha}></div>
                    <AutoreFanfic user="Nan_Yelo"/>
                    <div className={styles.info}>
                        <InfoFanfic imagem={dataIcon} info="aug/2023" altIcon="Última atualização."/>
                        <InfoFanfic imagem={capIcon} info="19/?" altIcon="Quantidade de capítulos."/>
                        <InfoFanfic imagem={comentarioIcon} info="138" altIcon="Quantidade de comentários."/>
                    </div>
                    <SinopseFanfic texto="Vazio. Tédio. Insatisfação. Isso era tudo que ele sentia, e só precisava de uma distração... O que ele não esperava, no entanto, é que essa distração viria na forma de um lindo mexicano que estava prestes a endireitar sua vida torta para sempre."/>
                    <div className={styles.tag}>
                            <Tag texto='Happy Ending'/>
                            <Tag texto='Alcatraz'/>
                            <Tag texto='Canon Divergent'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardFanfic;