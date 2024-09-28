import styles from './index.module.scss';

interface CardFanart {
  linkFanart: string;
  img: string;
  alt?: string;
  title: string;
  artist: string;
  profPic: string;
}

const CardDescubraFanart = (props: CardFanart) => {
  return (
    <a href={props.linkFanart} className={styles.card}>
      <img src={props.img} alt={props.alt}/>
      <div className={styles.infoFanart}>
        <div className={styles.cardBelow}>
          <img src={props.profPic} alt={`foto de perfil de ${props.artist}`} />
          <div className={styles.text}>
            <div className={styles.title}>
                {props.title}
            </div>
            <span className={styles.creditosArtista}>por {props.artist}</span>
          </div>
        </div>
      </div>
    </a>
  )
}

export default CardDescubraFanart;