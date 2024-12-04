import { Helmet } from 'react-helmet';
import BannerHome from '../../components/HomeComponents/BannerHome';
import Plantando from '../../components/Plantando';

const Home = () => {

  return (
    <>
      <Helmet> <title>Plantando Amarantos</title> </Helmet>
      {/* <BannerHome /> */}
      <Plantando title={'Nada por aqui'} texto={'Ainda estamos plantando as sementes de amaranto...'} />
    </>
  )
}

export default Home;
