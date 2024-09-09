import { Link } from "react-router-dom";

import styles from './index.module.scss';
import guapoduo from '/image/guapoduo/plantando.png?url';
import lente from '/image/guapoduo/lente.png?url';
import React, {Component, PropsWithChildren} from "react";

interface PlantantoProps {
    title: string,
    texto: string,
    botao?: boolean
}

class Plantando extends Component<PropsWithChildren<PlantantoProps>> {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.op1}>
                    <img src={guapoduo} className={styles.imagem} alt="guapoduo" />
                    {this.props.botao &&
                        <div className={styles.botao}>
                            <Link className= {styles.teste} to='/login'> 
                                <img src={lente} alt="guapoduo" /> 
                            </Link> 
                        </div>
                    }
                </div>
                <div className={styles.op2}>
                    <span className={styles.titulo}>  { this.props.title }</span>
                    <span className={styles.texto}> { this.props.texto } </span>
                    <div className={styles.objFilho}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Plantando;