import styles from './index.module.scss';

interface TagProps {
    icon: string;
    altImagem: string;
}

const BotaoIcon = ({icon, altImagem}: TagProps) => {
    return  <button className={styles.botao}>
                <img className={styles.icon} src={icon} alt={altImagem}/>
            </button>;
}

export default BotaoIcon;