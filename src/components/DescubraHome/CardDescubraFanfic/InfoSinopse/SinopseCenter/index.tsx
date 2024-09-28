import styles from './index.module.scss';

interface SinopseProps {
  sinopse: string;
}

const SinopseCenter = (props: SinopseProps) => {
  return (
    <p className={styles.sinopse}>
      {props.sinopse}
    </p>
  )
}

export default SinopseCenter;