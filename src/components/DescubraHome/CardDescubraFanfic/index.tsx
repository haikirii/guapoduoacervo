import styles from './index.module.scss';
import SvgText from '../SvgText';
import IsFinishedSvg from '../IsFinishedSvg';

interface CardFanfic {
  title: string;
  cover: string;
  coverAlt?: string;
  author: string;
  words: number;
  chaps: number;
  isFinished: boolean;
  linkFanfic: string;
}

// capa de fanart aqui teria alt?
const CardDescubraFanfic = (props: CardFanfic) => {
  return (
    <a href={props.linkFanfic} className={styles.card}>
      <img src={props.cover} alt={props.coverAlt} />
      <div className={styles.infoFanfic}>
        <div className={styles.titulo}>
          {props.title}
        </div>
        <div className={styles.credits}>
          por {props.author}
        </div>
        <div className={styles.divIcones}>
          <SvgText 
            isWords={true}
            words={props.words}
          />
          <SvgText 
            isChaps={true}
            chaps={props.chaps}
          />
          <IsFinishedSvg 
            isFinished={props.isFinished}
          />
        </div>
      </div>
    </a>
  )
}

export default CardDescubraFanfic;