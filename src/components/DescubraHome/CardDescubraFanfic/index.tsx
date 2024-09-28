import styles from './index.module.scss';
import SvgText from './InfoFanfic/SvgText';
import IsFinishedSvg from './InfoFanfic/IsFinishedSvg';
import BgFanartCard from '../../sharedComponents/BgFanartCard';
import InfoSinopse from './InfoSinopse';
import InfoFanfic from './InfoFanfic';

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

const CardDescubraFanfic = (props: CardFanfic) => {
  return (
    <a href={props.linkFanfic} className={styles.card}>
      <BgFanartCard img={props.cover} alt={props.coverAlt}/>
      <InfoFanfic 
        title={props.title}
        author={props.author}
        words={props.words}
        chaps={props.chaps}
        isFinished={props.isFinished}
      />
      <InfoSinopse 
        title={props.title}
        author={props.author}
        sinopse={props.sinopse}
      />
    </a>
  )
}

export default CardDescubraFanfic;