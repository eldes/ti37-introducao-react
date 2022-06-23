import { FunctionComponent } from 'react';
import ProdutoItem from '../components/ProdutoItem';
import Categoria from '../models/Categoria';

type Props = {
  categoria: Categoria
};

const CategoriaPage: FunctionComponent<Props> = function (props) {
  
  return (
		<>
			<h1>{props.categoria.nome}</h1>	
			<ul>
				{props.categoria.produtos.map(function(produto) {
					return <ProdutoItem produto={produto} />
				})}
			</ul>
		</>
	);
};

export default CategoriaPage;