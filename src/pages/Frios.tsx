import ProdutoItem from '../components/ProdutoItem';
import Produto from '../models/Produto';
import ProdutosService from '../services/Produtos';

const FriosPage = function() {

	const produtos: Produto[] = ProdutosService.lerTodos();

	return (
		<>
			<h1>Frios</h1>
			<ul>
				{produtos.map(function(produto) {
					return <ProdutoItem produto={produto} />
				})}
			</ul>
		</>
	);
};

export default FriosPage;