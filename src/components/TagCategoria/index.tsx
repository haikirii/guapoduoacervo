import styles from './index.module.scss';
import { CardFanficLinkType } from '../../types/CardFanficLinkType';
import { Link } from 'react-router-dom';
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from 'react';

const TagCategoria = (props: CardFanficLinkType) => {

    const { theme } = useContext(ThemeContext);

    return  <Link to={`${props.link}`}><button className={`${styles.tags} ${styles[theme]}`}>{props.texto}</button></Link>;
}

export default TagCategoria;