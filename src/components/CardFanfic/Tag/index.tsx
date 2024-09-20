import styles from './index.module.scss';

interface TagProps {
    texto: string;
}

const Tag = ({texto}: TagProps) => {
    return  <span className={styles.tags}>{texto}</span>;
}

export default Tag;