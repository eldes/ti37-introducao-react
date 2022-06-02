import { FunctionComponent } from 'react';
import styles from './styles.module.css';

type Props = {
  urlFoto: string
  nome: string
  preco: number
};

const ProdutoItem: FunctionComponent<Props> = function(props) {
  return (
    <li className={styles.ProdutoItem}>
      <img className={styles.foto} src={props.urlFoto} alt="foto do produto" />
      <span className={styles.nome}>{props.nome}</span>
      <span className={styles.preco}>R$ {props.preco}</span>
    </li>
  );
};

export default ProdutoItem;