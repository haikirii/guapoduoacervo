import styles from "./index.module.scss";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useContext } from "react";

interface paragrafProps {
  texto: string;
}

const FanficParagrafo = (props: paragrafProps) => {

  const { theme } = useContext(ThemeContext);

  const splitText = props.texto.split("\n");
  return splitText.map((item: string, index: number) => (
    <p key={index} className={`${styles.texto} ${styles[theme]}`}>
      {splitText[index]}
    </p>
  ));
};

export default FanficParagrafo;
