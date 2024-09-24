import styles from './index.module.scss';

interface FanartProps {
  fanart: string;
  alt?: string;
  title: string;
  profilePic: string;
  profileName: string;
}

const CardFanart = (props: FanartProps) => {
  return (
    <div className={styles.card}>
      <img src={props.fanart} alt={props.alt} />
      <div className={styles.cardHover}>
        <svg viewBox="0 0 41 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.86795 17.5577C7.42684 21.0958 13.6335 26 20.6948 26C27.7562 26 33.9616 21.0958 37.5205 17.5577C38.4591 16.6246 38.93 16.1565 39.2289 15.2403C39.4421 14.5867 39.4421 13.4136 39.2289 12.7599C38.93 11.8437 38.4592 11.3755 37.5205 10.4423C33.9616 6.9042 27.7562 2 20.6948 2C13.6335 2 7.42684 6.9042 3.86795 10.4423C2.92862 11.3761 2.45891 11.8434 2.15993 12.7599C1.94669 13.4135 1.94669 14.5867 2.15993 15.2403C2.45891 16.1568 2.92861 16.6239 3.86795 17.5577Z" stroke="#5F4B32" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.6944 14.0001C16.6944 16.2092 18.4853 18.0001 20.6945 18.0001C22.9036 18.0001 24.6945 16.2092 24.6945 14.0001C24.6945 11.7909 22.9036 10.0001 20.6945 10.0001C18.4853 10.0001 16.6944 11.7909 16.6944 14.0001Z" stroke="#5F4B32" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div className={styles.cardCreditos}>
          <img src={props.profilePic} />
          <div className={styles.creditosText}>
            <div className={styles.cardTitulo}>
              ${props.title}
            </div>
            <div className={styles.creditoNome}>
              <span>por ${props.profileName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardFanart;