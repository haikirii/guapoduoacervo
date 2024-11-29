import { Helmet } from "react-helmet";
import styles from "./index.module.scss";
import FanficTituloCompleto from "../../components/FanficComp/FanficTituloCompleto";
import FanficParagrafo from "../../components/FanficComp/FanficParagrafo";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

const infosFicTitle = {
  titulo: "Sangria",
  autore: "Nan_Yelo",
  numeroPag: 0,
  tituloCap: "Prólogo",
};

const ficText = "Arrependimento. Essa é uma palavra que acompanha a maioria das pessoas que já tiveram a oportunidade de pisar na terra. Arrependimento de não terem dado o seu melhor quando tinham a oportunidade, ou até mesmo de terem exagerado em determinada atitude que acabou por causar mais mal do que o esperado. Era um sentimento amargo, que acompanha cada passo do afligido e não permite que sua mente ou alma tenham paz, sempre recordando das milhares de possibilidades que poderiam ter ocorrido caso tal erro não tivesse sido cometido. Arrependimento é definitivamente uma das coisas mais pesadas e desconfortáveis que um ser humano poderia carregar, perdendo apenas para o ódio e a sede de vingança.\nE é por isso que Bagi se recusava a ser dominada por qualquer um daqueles sentimentos traiçoeiros.\nA jovem mulher encarou os mapas espalhados pela áspera mesa de madeira da taverna com o cenho franzido, comple- tamente frustrada com a quantidade de informação que eles tinham, mas que, ao mesmo tempo, não lhe diziam nada.\nTudo que ela precisava era que um daqueles malditos pedaços de papéis velhos lhe indicassem o caminho que ela tanto almejava, mas era frustrante como nenhum dos mapas parecia ter um caminho bem definido para o seu objetivo. Obviamente já esperava por aquilo, tendo em vista que seu destino final se tratava de um local que poucos se atreviam a colocar os pés quando não eram oriundos de lá, mas ela precisava encontrar um jeito de chegar até Metusl o quanto antes, e por algum motivo que desconhecia, ela sentia que seu tempo estava acabando.\nGrunhindo em frustração, a caçadora agarrou seu copo e deu longas goladas na cerveja quente, o que culminou em um gosto amargo e acabou por causar uma careta de nojo ao invés de deleite, o que adicionou mais uma coisa desagradável para a crescente pilha de frustrações da mulher naquele dia.\n— Inferno — praguejou baixinho, depositando a caneca na mesa com demasiada força. — Eu nunca vou achar essa merda de lugar nesse ritmo, o que que eu faço?\nAlgumas das poucas pessoas espalhadas pelas mesas da taverna olharam em sua direção de forma curiosa, mas rap- idamente voltaram a focar em seus próprios assuntos, muito para o alívio da caçadora, que sutilmente cobriu metade do rosto com o pano que carregava em volta do pescoço. Ela precisava ser sorrateira, principalmente porque nas terras onde se encontrava atualmente, era praticamente tabu mencionar as áreas amaldiçoadas do norte — o que explicaria bastante os mapas nada úteis que adquiriu durante o dia.\n"

const FanficProtot = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Helmet>
        <title>Fanfic</title>
      </Helmet>

      <div className={`${styles.titulo} ${styles[theme]}`}>
        <FanficTituloCompleto
          titulo={infosFicTitle.titulo}
          autore={infosFicTitle.autore}
          numero={infosFicTitle.numeroPag}
          tituloCap={infosFicTitle.tituloCap}
        />
      </div>
      <main className={`${styles.main} ${styles[theme]}`}>
        <div className={`${styles.mainContent} ${styles[theme]}`}>
          <FanficParagrafo texto={ficText}/>
        </div>
      </main>
    </>
  );
};

export default FanficProtot;
