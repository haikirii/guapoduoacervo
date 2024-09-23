import { Helmet } from 'react-helmet';
import BannerHome from '../../components/BannerHome';

const Home = () => {

  return (
    <>
      <Helmet> <title>Plantando Amarantos</title> </Helmet>
      <BannerHome />
    </>
  )
}

export default Home;