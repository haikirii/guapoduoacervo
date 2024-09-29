import CreditosAbove from './CreditosAbove';
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
      <CreditosAbove
        title={props.title}
        author={props.author}
      />
      <SinopseCenter 
        sinopse={props.sinopse}
      />
    </div>
  )
}

export default InfoSinopse