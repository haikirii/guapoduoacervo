import { Helmet } from 'react-helmet';
import FanficListagem from '../../components/FanficListagem';

const Wip = () => {
  return (
    <>
      <Helmet>
        <title>Plantando Amarantos</title>
      </Helmet>
      <FanficListagem/>
      <FanficListagem/>
      <FanficListagem/>
    </>
  )
}

export default Wip;
