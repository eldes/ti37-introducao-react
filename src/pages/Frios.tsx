import ProdutoItem from '../components/ProdutoItem';

const FriosPage = function() {
	return (
		<>
			<h1>Frios</h1>
			<ul>
				<ProdutoItem
					urlFoto={'https://www.laticiniospiramide.com.br/media/catalog/product/cache/1/image/600x/17f82f742ffe127f42dca9de82fb58b1/p/r/produtos_que_faltavam_1000_31_.jpg'}
					nome={'Mortadela'}
					preco={15}
				/>
				<ProdutoItem
					urlFoto={'https://www.laticiniospiramide.com.br/media/catalog/product/cache/1/image/600x/17f82f742ffe127f42dca9de82fb58b1/p/r/produtos_que_faltavam_1000_31_.jpg'}
					nome={'Mortadela'}
					preco={15}
				/>
				<ProdutoItem
					urlFoto={'https://www.laticiniospiramide.com.br/media/catalog/product/cache/1/image/600x/17f82f742ffe127f42dca9de82fb58b1/p/r/produtos_que_faltavam_1000_31_.jpg'}
					nome={'Mortadela'}
					preco={15}
				/>
			</ul>
		</>
	);
};

export default FriosPage;