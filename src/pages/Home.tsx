import { useState } from 'react';
import Botao from '../components/Botao';
import CampoTexto from '../components/CampoTexto';

const HomePage = function() {
	const [data, setData] = useState((new Date()).toLocaleString());

	const botaoAtualizarClicado = function() {
		setData((new Date()).toLocaleString());
	};

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
			<Botao texto="Atualizar" botaoClicado={botaoAtualizarClicado} />
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