import styles from './index.module.scss';

interface LinksProps {
  nomePagina: string;
  link: string;
}

const HeaderLinks = (props: LinksProps) => {
  return (
    <div className={styles.link}>
      <a href={props.link}>{props.nomePagina}</a>
    </div>
  )
}

export default HeaderLinks;
