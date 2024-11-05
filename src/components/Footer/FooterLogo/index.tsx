import styles from './index.module.scss'

interface propsFooter {
  src: string;
  alt: string;
}

const FooterLogo = (props: propsFooter) => {
  return <img className={styles.img} src={props.src} alt={props.alt} />
}

export default FooterLogo;