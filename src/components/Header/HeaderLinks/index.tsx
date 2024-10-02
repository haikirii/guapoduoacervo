import styles from './index.module.scss';

interface LinksProps {
  nomePagina: string;
  link: string;
}

const HeaderLinks = (props: LinksProps) => {
  return (
    <div className={styles.link}>
    </div>
  )
}

export default HeaderLinks;