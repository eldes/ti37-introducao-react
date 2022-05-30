import Botao from '../components/Botao';
import CampoTexto from '../components/CampoTexto';

const HomePage = function() {
	const data = '30 de maio de 2022, 17h26';

	const botaoEntrarClicado = function() {
		alert('ENTRAR');
	};
	
	const botaoCadastrarClicado = function() {
		alert('CADASTRAR');
	};

	return (
		<>
			<h1>Homepage</h1>
			<p>{data}</p>
			<div>
				<CampoTexto etiqueta="Nome de usuário" />
				<CampoTexto etiqueta="Senha" />
				<Botao texto="Entrar" botaoClicado={botaoEntrarClicado} />
				<Botao texto="Cadastrar" botaoClicado={botaoCadastrarClicado} />
			</div>
		</>
	);
}

export default HomePage;