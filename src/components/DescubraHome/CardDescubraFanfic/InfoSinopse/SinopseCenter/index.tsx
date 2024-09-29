import styles from './index.module.scss';

import { CardFanficProps } from '../../../../../types/cardFanficType';

const SinopseCenter = (props: CardFanficProps) => {
  return (
    <p className={styles.sinopse}>
      {props.sinopse}
    </p>
  )
}

export default SinopseCenter;