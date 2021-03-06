import { useEffect, useState } from 'react';
import ProdutoItem from '../components/ProdutoItem';
import Produto from '../models/Produto';
import ProdutosService from '../services/Produtos';

const FriosPage = function() {

	const [carregando, setCarregando] = useState<boolean>(false);
	const [produtos, setProdutos] = useState<Produto[]>([]);
	
	const recarregar = function () {
		setCarregando(true);
		ProdutosService.lerTodos(function (produtos) {
			setProdutos(produtos);
			setCarregando(false);
		});
	};

	const botaoRecarregarClicado = function () {
		recarregar();
	};

	useEffect(function () {
		recarregar();
	}, []);

	return (
		<>
			<h1>Frios</h1>
			{(carregando) && (
				<p>Carregando...</p>
			)}
			
			<ul>
				{produtos.map(function(produto) {
					return <ProdutoItem produto={produto} />
				})}
			</ul>
			<button onClick={botaoRecarregarClicado}>Recarregar</button>
		</>
	);
};

export default FriosPage;