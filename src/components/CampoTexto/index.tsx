import { ChangeEventHandler, FunctionComponent, useState } from 'react';
import styles from './styles.module.css';

type Props = {
  etiqueta: string
  textoAlterado?: (texto: string) => void
};

const CampoTexto: FunctionComponent<Props> = function(props) {

  const [texto, setTexto] = useState('');

  const valorAlterado: ChangeEventHandler<HTMLInputElement> = function(evento) {
    const input = evento.target;
    setTexto(input.value);

    if (props.textoAlterado) {  
      props.textoAlterado(texto);
    }
  };

  return (
    <div className={styles.CampoTexto}>
      {(texto.length > 0) && (
        <label>{props.etiqueta}:</label>
      )}
      <input placeholder={props.etiqueta} onChange={valorAlterado} />
    </div>
  );
};

export default CampoTexto;