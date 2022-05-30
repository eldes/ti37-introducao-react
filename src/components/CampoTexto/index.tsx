import { FunctionComponent } from 'react';
import styles from './styles.module.css';

type Props = {
  etiqueta: string
};

const CampoTexto: FunctionComponent<Props> = function(props) {
  return (
    <div className={styles.CampoTexto}>
      <label>{props.etiqueta}:</label>
      <input placeholder={props.etiqueta} />
    </div>
  );
};

export default CampoTexto;