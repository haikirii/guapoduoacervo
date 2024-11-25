import styles from "./index.module.scss";
import TituloAutore from "./TituloAutore";
import NumeroTituloFic from "./NumeroTituloFic";

interface FicTituloProps {
  titulo: string
  autore: string
  numero: number
  tituloCap: string
}

const FanficTituloCompleto = (props: FicTituloProps) => {
  return (
    <div className={`${styles.titulos} wrapper`}>
      <TituloAutore titulo={props.titulo} autore={props.autore} />
      <NumeroTituloFic
        numero={props.numero}
        tituloCap={props.tituloCap}
      />
    </div>
  );
};

export default FanficTituloCompleto;
