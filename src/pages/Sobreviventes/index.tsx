import { Helmet } from 'react-helmet';
import styles from './index.module.scss';
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from '../../service/firebase-config';
import { useEffect, useState } from "react";


function gerarNumeroAleatorio() {
  var numero = '';

  var timestamp = new Date().getTime();
  numero = timestamp.toString().substr(-4);

  return numero;
}

const Sobreviventes = () => {

  const ticket = gerarNumeroAleatorio();

  useEffect(() => {
    const collectionName = "tickets";
    addDoc(collection(db, collectionName), { id: ticket });
  });

  return (
    <>
      <Helmet> <title> Você Sobreviveu! </title> </Helmet>
      <div className={styles.container}>
        testando {ticket}
      </div>
    </>
  )
}

export default Sobreviventes;