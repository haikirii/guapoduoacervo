import styles from './index.module.scss';
import SinopseCenter from './SinopseCenter';

interface InfoSinopseProps {
  title: string;
  author: string;
  sinopse: string;
}

const InfoSinopse = (props: InfoSinopseProps) => {
  return (
    <div className={styles.infoSinopse}>
      <div className={styles.creditosAbove}>
        <div className={styles.titulo}>
          {props.title}
        </div>
        <div className={styles.credits}>
          por {props.author}
        </div>
      </div>
      <SinopseCenter 
        sinopse={props.sinopse}
      />
    </div>
  )
}

export default InfoSinopse