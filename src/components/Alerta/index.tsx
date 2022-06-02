import { FunctionComponent } from 'react';

type Props = {
  texto: string
};

const Alerta: FunctionComponent<Props> = function(props) {
  return (
    <div>
      <p>{props.texto}</p>
    </div>
  );
};

export default Alerta;