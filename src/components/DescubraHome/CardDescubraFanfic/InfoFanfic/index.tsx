import styles from './index.module.scss';
import IsFinishedSvg from './IsFinishedSvg';
import SvgText from './SvgText';

interface InfoFanficProps {
  title: string;
  author: string;
  words: number;
  chaps: number;
  isFinished: boolean;
  isHovered: boolean;
}

const InfoFanfic = (props: InfoFanficProps) => {
  return (
    <div className={`${styles.infoFanfic} ${props.isHovered ? styles.hovered : ''}`}>
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
  )
}

export default InfoFanfic;