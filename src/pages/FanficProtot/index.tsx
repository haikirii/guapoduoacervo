import { Helmet } from "react-helmet";
import styles from "./index.module.scss";
import FanficTituloCompleto from "../../components/FanficTituloCompleto";
import FanficParagrafo from "../../components/FanficParagrafo";

const infosFicTitle = {
  titulo: "Sangria",
  autore: "Nan_Yelo",
  numeroPag: 0,
  tituloCap: "Prólogo",
};

const FanficProtot = () => {
  return (
    <>
      <Helmet>
        <title>Fanfic</title>
      </Helmet>

      <div className={styles.titulo}>
        <FanficTituloCompleto
          titulo={infosFicTitle.titulo}
          autore={infosFicTitle.autore}
          numero={infosFicTitle.numeroPag}
          tituloCap={infosFicTitle.tituloCap}
        />
      </div>
      <main>
        <div className={styles.mainContent}>
          <FanficParagrafo />
        </div>
      </main>
    </>
  );
};

export default FanficProtot;
