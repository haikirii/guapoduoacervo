import styles from './index.module.scss';
import SvgText from './SvgText';
import IsFinishedSvg from './IsFinishedSvg';
import BgFanartCard from '../../sharedComponents/BgFanartCard';

interface CardFanfic {
  title: string;
  cover: string;
  coverAlt?: string;
  author: string;
  words: number;
  chaps: number;
  isFinished: boolean;
  linkFanfic: string;
  sinopse: string;
}

// capa de fanart aqui teria alt?
const CardDescubraFanfic = (props: CardFanfic) => {
  return (
    <a href={props.linkFanfic} className={styles.card}>
      <BgFanartCard img={props.cover} alt={props.coverAlt}/>
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
      <div className={styles.infoSinopse}>
        <div className={styles.creditosAbove}>
          <div className={styles.titulo}>
            {props.title}
          </div>
          <div className={styles.credits}>
            por {props.author}
          </div>
        </div>
        <p className={styles.sinopse}>
          {props.sinopse}
        </p>
      </div>
    </a>
  )
}

export default CardDescubraFanfic;