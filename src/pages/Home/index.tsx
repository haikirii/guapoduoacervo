<<<<<<< HEAD
import { Helmet } from 'react-helmet';
import '../../stylus/index.scss';

const Home = () =>{
    return(
        <>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <section className="home">
            <h2>Home</h2>
            <p>Imagem aqui</p>
            <p>BLA BLA BLA</p>
            <p>BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA </p>
            <p>BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA </p>
            <p>BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA </p>
        </section>
        </>
    );
}

export default Home
=======
import { Helmet } from 'react-helmet';
import Plantando from '../../components/Plantando';
const Wip = () => {

  const data = {
    title: "Nada por aqui",
    texto: "Ainda estamos plantando as sementes de amaranto..."
  }

  return (
    <>
      <Helmet> <title>Plantando Amarantos</title> </Helmet>
        <Plantando 
          title={data.title} 
          texto={data.texto}
          botao={true}
        />
    </>
  )
}

export default Wip;
>>>>>>> main
