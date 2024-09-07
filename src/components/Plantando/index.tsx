import { Link } from "react-router-dom";

import styles from './index.module.scss';
import guapoduo from '/image/guapoduo/plantando.png?url';
import lente from '/image/guapoduo/lente.png?url';

export default function Plantando(props: { title: string, texto: string, botao?: boolean}) {
    return (
        <div className={styles.container}>
            <div className={styles.op1}>
                <img src={guapoduo} className={styles.imagem} alt="guapoduo" />
                {props.botao &&
                    <div className={styles.botao}> <Link className= {styles.teste} to='/login'> <img src={lente} alt="guapoduo" /> </Link>  </div>
                }
            </div>
            <div className={styles.op2}>
                <span className={styles.titulo}>  { props.title }</span>
                <span className={styles.texto}> { props.texto } </span>
            </div>
        </div>
    )
}