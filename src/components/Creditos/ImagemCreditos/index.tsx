import styles from './index.module.scss';

interface ImagemCreditosProps{
    imagem: string;
}

const ImagemCreditos = ({imagem}: ImagemCreditosProps) => {
  return (
    <img src={imagem} className={styles.imagem}/>
  )
}

export default ImagemCreditos;