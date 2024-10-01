import styles from './index.module.scss';
import BgFanartCard from '../../sharedComponents/BgFanartCard';
import InfoSinopse from './InfoSinopse';
import InfoFanfic from './InfoFanfic';
import { useState } from 'react';

import { CardFanficProps } from '../../../types/cardFanficType';

const CardDescubraFanfic = (props: CardFanficProps) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={props.linkFanfic} className={styles.card}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      <BgFanartCard img={props.cover} alt={props.coverAlt}/>
      <InfoFanfic 
        title={props.title}
        author={props.author}
        words={props.words}
        chaps={props.chaps}
        isFinished={props.isFinished}
        isHovered={isHovered}
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