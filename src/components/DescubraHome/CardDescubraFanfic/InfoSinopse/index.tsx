import CreditosAbove from './CreditosAbove';
import styles from './index.module.scss';
import SinopseCenter from './SinopseCenter';

import { CardFanficProps } from '../../../../types/cardFanficType';

const InfoSinopse = (props: CardFanficProps) => {
  return (
    <div className={styles.infoSinopse}>
      <CreditosAbove
        title={props.title}
        author={props.author} 
        cover={''} 
        words={0} 
        chaps={0} 
        isFinished={false} 
        linkFanfic={''} 
        sinopse={''}      
      />
      <SinopseCenter 
        sinopse={props.sinopse} 
        title={''} 
        cover={''} 
        author={''} 
        words={0} 
        chaps={0} 
        isFinished={false} 
        linkFanfic={''}      
        />
    </div>
  )
}

export default InfoSinopse