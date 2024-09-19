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