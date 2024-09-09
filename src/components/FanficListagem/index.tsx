import SinopseFanfic from '../SinopseFanfic';
import Tag from '../Tag';
import TituloFanfic from '../TituloFanfic';
import styles from './index.module.scss';
import Classificacao from '../../../public/image/classificacao/classificacao-12-anos-logo.png';
import Capa from '../../../public/temp/capa.jpg';
import ClassificacaoLogo from '../ClassificacaoLogo';
import CapaFanfic from '../CapaFanfic';

const FanficListagem = () => {
    return  (
        <div className={styles.principal}>
            <div className={styles.background}>
                <div className={styles.alinhaImagem}>
                <CapaFanfic nomeImagem={Capa} />
                </div>
                    <div className={styles.alinhaconteudo}>
                    <TituloFanfic texto="The reason"/>
                    <SinopseFanfic texto="Uma sinopse muito foda Uma sinopse muito foda Uma sinopse muito foda Uma sinopse muito foda Uma sinopse muito foda Uma sinopse muito foda Uma sinopse muito foda Uma sinopse muito foda Uma sinopse muito foda Uma sinopse muito foda Uma sinopse muito foda Uma sinopse muito foda Uma sinopse muito foda Uma sinopse muito foda Uma sinopse muito foda Uma sinopse muito foda Uma sinopse muito foda Uma sinopse muito foda Uma sinopse muito foda Uma sinopse muito foda "/>
                    <div className={styles.alinhatag}>
                        <ClassificacaoLogo nomeImagem={Classificacao}/>
                        <div>
                            <Tag texto='Canon Divergence'/>
                            <Tag texto='Happy Ending'/>
                            <Tag texto='Alcatraz'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FanficListagem;