import { FunctionComponent } from 'react';
import styles from './styles.module.css';

type Props = {
  texto: string
  botaoClicado: () => void
};

const Botao: FunctionComponent<Props> = function(props) {

  return (
    <button
      className={styles.Botao}
      onClick={props.botaoClicado}
    >
      {props.texto}
    </button>
  );
}

export default Botao;