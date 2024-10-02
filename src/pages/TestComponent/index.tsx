import '../../styles/icons/style.css';
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
     <InteracaoBotaoFanfic/>
     
     <AtualizacaoListagem 
      pathCapa={Capa} 
      titulo={'The reason'} 
      novoCap={false} 
      textoBotao={'Ler Agora'}
      linkFanfic={'asaasd'}
     />

     <CardFanfic 
     pathCapa={Capa}
     titulo={'The reason'}
     pathClassificacao={Classificacao}
     altClassificação={'Recomendado para maiores de 16 anos'}
     autore={'Nan_yelo'}
     sinopse={"Vazio. Tédio. Insatisfação. Isso era tudo que ele sentia, e só precisava de uma distração... O que ele não esperava, no entanto, é que essa distração viria na forma de um lindo mexicano que estava prestes a endireitar sua vida torta para sempre."}
     comentario={138}
     capitulo={'19/?'} 
     data={'aug. 2023'}
     linkFanfic={'saasas'} 
     linkAutore={'vdvveef'} />
    </div>
  )
}

export default TestComponent;
