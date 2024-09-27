import styles from './index.module.scss';

interface TagProps {
    icon: string;
}

const BotaoIcon = ({icon}: TagProps) => {
    return  <button className={styles.botao}><i className={`${icon} ${styles.icone}` }></i></button>;
}

export default BotaoIcon;