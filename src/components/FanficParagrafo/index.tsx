import styles from "./index.module.scss";

interface paragrafProps {
  texto: string;
}

const FanficParagrafo = (props: paragrafProps) => {
  return <p>{props.texto}</p>;
};

export default FanficParagrafo;
