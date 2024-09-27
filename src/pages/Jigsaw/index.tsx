import styles from './index.module.scss';

import { useState } from 'react';
import img from '/temp/capa.jpg';

import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib';
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

const Jigsaw = () => {
  const [text, setText] = useState("Unpuzzle the pieces!!");
    
  const set = () => {
      setText("Congratulations!!");
  };
  

  return (
    <>
      <h2 className={styles.tag}>{text}</h2>
      <JigsawPuzzle
          imageSrc={img}
          rows={3}
          columns={3}
          onSolved={set}
      />
    </>
  )
}

export default Jigsaw;