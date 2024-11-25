import styles from "./index.module.scss";

interface paragrafProps {
  texto: string;
}

const FanficParagrafo = (props: paragrafProps) => {
  const splitText = props.texto.split("\n");
  return splitText.map((item: string, index: number) => (
    <p key={index} className={styles.texto}>
      {splitText[index]}
    </p>
  ));
};

export default FanficParagrafo;
