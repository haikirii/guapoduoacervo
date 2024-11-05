import styles from './index.module.scss';
import '../../../styles/icon/style.css';

interface TagProps {
    icon: string;
}

const BotaoIcon = ({icon}: TagProps) => {
    return  <button className={styles.botao}><i className={`${icon} ${styles.icone}`}></i></button>;
}

export default BotaoIcon;