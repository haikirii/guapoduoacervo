import styles from './index.module.scss';

interface BotaoProps {
  src: string,
  lang: string,
}

const BotaoMudarIdioma = (props: BotaoProps) => {
  return (
    <button className={styles.button}>
      <img src={props.src} alt={`botão mudar idioma para ${props.lang}`} />
    </button>
  )
}

export default BotaoMudarIdioma;