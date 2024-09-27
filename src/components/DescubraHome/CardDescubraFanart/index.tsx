import styles from './index.module.scss';

interface CardFanart {
  linkFanart: string;
  img: string;
  alt?: string;
}

const CardDescubraFanart = (props: CardFanart) => {
  return (
    <a href={props.linkFanart} className={styles.card}>
      <img src={props.img} alt={props.alt}/>
    </a>
  )
}

export default CardDescubraFanart;