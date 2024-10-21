import Creditos from '../../components/Creditos';
import styles from './index.module.scss';
import icon from '/temp/valky.jpg';

const TestComponent = () => {
  return (
    <div className={styles.fundo}>
      <Creditos funcao={'REVISÃO'} user={'Valky'} icon={icon}/>
      <Creditos funcao={'TRADUÇÃO'} user={'Jae'} icon={icon} link='jaepagina'/>
      <Creditos funcao={'ARTE DE CAPA'} user={'Ratinha'} icon={icon} link='linkprotwitter'/>
    </div>
  )
}

export default TestComponent;