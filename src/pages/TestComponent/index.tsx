import AtualizacaoListagem from '../../components/CardAtualizacao/AtualizacaoListagem';
import styles from './index.module.scss';

const TestComponent = () => {
  return (
    <>
      <div className={styles.fundo}>
        <AtualizacaoListagem tipoAtualizacao='Nova capítulo!'/>
        <AtualizacaoListagem tipoAtualizacao='Nova capítulo!'/>
        <AtualizacaoListagem tipoAtualizacao='Nova capítulo!'/>
        <AtualizacaoListagem tipoAtualizacao='Nova capítulo!'/>
        <AtualizacaoListagem tipoAtualizacao='Nova capítulo!'/>
        <AtualizacaoListagem tipoAtualizacao='Nova capítulo!'/>
      </div>
    </>
  )
}

export default TestComponent;