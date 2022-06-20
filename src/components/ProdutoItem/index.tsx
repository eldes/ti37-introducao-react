import { FunctionComponent } from 'react';
import Produto from '../../models/Produto';
import styles from './styles.module.css';

type Props = {
  produto: Produto
};

const ProdutoItem: FunctionComponent<Props> = function(props) {
  return (
    <li className={styles.ProdutoItem}>
      <img className={styles.foto} src={props.produto.urlFoto} alt="foto do produto" />
      <span className={styles.nome}>{props.produto.nome}</span>
      <span className={styles.preco}>R$ {props.produto.preco}</span>
    </li>
  );
};

export default ProdutoItem;