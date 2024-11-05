import styles from './index.module.scss';

interface UserCreditosProps{
    user: string;
}

const UserCreditos = ({user}: UserCreditosProps) => {
  return (
    <p className={styles.user}>{user}</p>
  )
}

export default UserCreditos;