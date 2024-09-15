import { Helmet } from 'react-helmet';
import styles from './index.module.scss';
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from '../../service/firebase-config';
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from '../../contexts/ThemeContext';
import guapoduo from '/image/guapoduo/plantando.png?url';
import "../../styles/base/_reset.scss"

function gerarNumeroAleatorio() {
  let numero = '';

  let timestamp = new Date().getTime();
  numero = timestamp.toString().substr(-4);

  return numero;
}

const Sobreviventes = () => {
  
  const { theme } = useContext(ThemeContext);

  const ticket = gerarNumeroAleatorio();

  useEffect(() => {
    const collectionName = "tickets";
    addDoc(collection(db, collectionName), { id: ticket });
  });

  return (
    <>
      <Helmet> <title> Você Sobreviveu! </title> </Helmet>
      <main className={`${styles.main} ${styles[theme]} wrapper`}>
          <div className={styles.containerImagem}>
            <img src={guapoduo} className={styles.imagem} />
          </div>
          <div className={styles.containerTicket}>
            <div className={styles.ticket}>
              <div className={styles.titulo}>
                  Você sobreviveu!
              </div>
              <div className={styles.ticketNumero}>
                <span className={styles.txtTck}>Nº Ticket:</span>
                <span className={styles.nTck}>{ticket}</span>
              </div>
              <div className={styles.textoAbaixo}>
                Parabéns, você sobreviveu ao ARGuapoduo, esse é seu ticket de resgate, com ele você terá seu badge exclusivo em nossa plataforma no universo guapoduo! Seu prêmio te aguarda no site, não compartilhe suas informações com <span className={styles.bold}>NINGUÉM</span>.
              </div>
            </div>
          </div>
      </main>
    </>
  )
}

export default Sobreviventes;