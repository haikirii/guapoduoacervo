import styles from './index.module.scss';

import { CardFanficProps } from '../../../../../types/cardFanficType';

const CreditosAbove = (props: CardFanficProps) => {
  return (
    <div className={styles.creditosAbove}>
    <div className={styles.titulo}>
      {props.title}
    </div>
    <div className={styles.credits}>
      por {props.author}
    </div>
  </div>
  )
}

export default CreditosAbove;