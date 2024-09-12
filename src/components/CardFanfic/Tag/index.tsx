import styles from './index.module.scss';

interface TagProps {
    texto: string;
}

const Tag = ({texto}: TagProps) => {
    return  <button className={styles.tags}>{texto}</button>;
}

export default Tag;