import { Helmet } from 'react-helmet';

const TemNadaAqui = () => {

  const data = {
    title: "Nada por aqui",
    texto: "Ainda estamos plantando as sementes de amaranto..."
  }

  return (
    <>
      <Helmet> <title>Tem Nada Aqui</title> </Helmet>
      
    </>
  )
}

export default TemNadaAqui;