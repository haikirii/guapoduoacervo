import styles from './index.module.scss';

import { CardFanartProps } from '../../../../types/cardFanartType';

const CardFanartBelow = (props: CardFanartProps) => {
  return (
    <div className={`${styles.cardBelow} ${props.isHovered ? styles.hovered : ''}`}>
      <img src={props.profPic} alt={`foto de perfil de ${props.artist}`} />
      <div className={styles.text}>
        <div className={styles.title}>
            {props.title}
        </div>
        <span className={styles.creditosArtista}>por {props.artist}</span>
      </div>
    </div>
  )
}

export default CardFanartBelow;