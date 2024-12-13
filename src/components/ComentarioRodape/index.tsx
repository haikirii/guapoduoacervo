import styles from './index.module.scss';

interface comentarioRodapeProps{
    comentario: any
}

const ComentarioRodape = ({comentario}: comentarioRodapeProps) => {
  return (
    <div className={styles.principal}>
        <div className={styles.comentario}>
            <p>{comentario}</p>
        </div>
    </div>
  )
}

export default ComentarioRodape