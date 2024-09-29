import styles from './index.module.scss';

interface CreditosAboveProps {
  title: string;
  author: string;
}

const CreditosAbove = (props: CreditosAboveProps) => {
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