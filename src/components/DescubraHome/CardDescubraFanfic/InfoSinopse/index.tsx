import styles from './index.module.scss';

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
      <p className={styles.sinopse}>
        {props.sinopse}
      </p>
    </div>
  )
}

export default InfoSinopse