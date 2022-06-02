import { ChangeEventHandler, FunctionComponent } from 'react';
import styles from './styles.module.css';

type Props = {
  etiqueta: string
  textoAlterado?: (texto: string) => void
};

const CampoTexto: FunctionComponent<Props> = function(props) {

  const valorAlterado: ChangeEventHandler<HTMLInputElement> = function(evento) {
    if (props.textoAlterado) {
      const input = evento.target;
      const texto = input.value;
      props.textoAlterado(texto);
    }
  };

  return (
    <div className={styles.CampoTexto}>
      <label>{props.etiqueta}:</label>
      <input placeholder={props.etiqueta} onChange={valorAlterado} />
    </div>
  );
};

export default CampoTexto;