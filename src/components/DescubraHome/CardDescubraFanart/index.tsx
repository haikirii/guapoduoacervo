import styles from './index.module.scss';
import BgFanartCard from '../../sharedComponents/BgFanartCard';
import CardFanartBelow from './CardFanartBelow';
import { useState } from 'react';

interface CardFanart {
  linkFanart: string;
  img: string;
  alt?: string;
  title: string;
  artist: string;
  profPic: string;
}

const CardDescubraFanart = (props: CardFanart) => {
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
          isHovered={isHovered}
        />
      </div>
    </a>
  )
}

export default CardDescubraFanart;