import styles from './index.module.scss';

interface ImagemFanartProps{
  imagem: string;
}

const ImagemFanart = ({imagem}: ImagemFanartProps) => {
  return (
    <div className={styles.alinha}>
      <img src={imagem} className={styles.imagem}/>
    </div>
  )
}

export default ImagemFanart;