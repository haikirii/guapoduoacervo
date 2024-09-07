import React, { ReactNode } from "react";

import styles from './index.module.scss';
import guapoduo from '/public/image/guapoduo/plantando.png';

export default function Plantando(props: { title: string, texto: string}) {
    return (
        <section>
            <img src={guapoduo} alt="guapoduo" />
            <div className={styles.caixaTexto}>
                <span>  { props.title }</span>
                <br />
                <span> { props.texto } </span>
            </div>
        </section>
    )
}