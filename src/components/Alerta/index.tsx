import { FunctionComponent } from 'react';
import styles from './styles.module.css';

type Props = {
  texto: string
};

const Alerta: FunctionComponent<Props> = function(props) {
  return (
    <div className={styles.Alerta}>
      <p>{props.texto}</p>
    </div>
  );
};

export default Alerta;