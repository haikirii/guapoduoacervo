import styles from './index.module.scss';

interface bgFanart {
  img: string;
  alt?: string;
}

const BgFanartCard = (props: bgFanart) => {
  return <img src={props.img} alt={props.alt} className={styles.imgBgCard}/>
}

export default BgFanartCard;