import styles from './index.module.scss';

interface InfoProps {
    icon: string;
    infoString?: string;
    infoNumber?: number;
}

const InfoFanfic = ({icon, infoString, infoNumber}: InfoProps) => {
    return  (
        <div className={styles.alinhamento}>
            <i className={icon}/><p className={styles.fonte}>{infoString ?  infoString : infoNumber}</p>
        </div>
    );
}

export default InfoFanfic;