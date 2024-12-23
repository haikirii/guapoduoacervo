import styles from './index.module.scss';
import BgFanartCard from '../../sharedComponents/BgFanartCard';
import CardFanartBelow from './CardFanartBelow';
import { useState } from 'react';

import { CardFanartProps } from '../../../types/cardFanartType';

const CardDescubraFanart = (props: CardFanartProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a href={props.linkFanart} className={styles.card}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      
      <BgFanartCard img={props.img} alt={props.alt}/>
      <div className={styles.infoFanart}>
        <CardFanartBelow
          title={props.title}
          artist={props.artist}
          profPic={props.profPic}
          isHovered={isHovered} img={''}        />
      </div>
    </a>
  )
}

export default CardDescubraFanart;