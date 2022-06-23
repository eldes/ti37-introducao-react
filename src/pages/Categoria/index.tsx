import { FunctionComponent } from 'react';
import ProdutoItem from '../../components/ProdutoItem';
import Categoria from '../../models/Categoria';
import styles from './styles.module.css';

type Props = {
  categoria: Categoria
};

const CategoriaPage: FunctionComponent<Props> = function (props) {
  
  return (
		<div className={styles.CategoriaPage}>
			<h1 className={styles.Nome}>{props.categoria.nome}</h1>	
			<ul className={styles.Produtos}>
				{props.categoria.produtos.map(function(produto) {
					return <ProdutoItem produto={produto} />
				})}
			</ul>
		</div>
	);
};

export default CategoriaPage;