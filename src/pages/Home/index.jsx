import { Helmet } from 'react-helmet';
import '../../css/index.css';

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