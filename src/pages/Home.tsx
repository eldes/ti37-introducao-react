import { useState } from 'react';
import Alerta from '../components/Alerta';
import Botao from '../components/Botao';
import CampoTexto from '../components/CampoTexto';

const HomePage = function() {
	const [data, setData] = useState((new Date()).toLocaleString());

	const [nomeUsuario, setNomeUsuario] = useState('');
	const [senha, setSenha] = useState('');
	const [mostraAlertaSucesso, setMostraAlertaSucesso] = useState(false);
	const [mostraAlertaFalha, setMostraAlertaFalha] = useState(false);

	setInterval(function() {
		setData((new Date()).toLocaleString());
	}, 1000);

	const botaoAtualizarClicado = function() {
		setData((new Date()).toLocaleString());
	};

	const botaoEntrarClicado = function() {

		const loginCorreto = (nomeUsuario === 'eldes') && (senha === '123');

		setMostraAlertaSucesso(loginCorreto);
		setMostraAlertaFalha(!loginCorreto);
	};
	
	const botaoCadastrarClicado = function() {
		alert('CADASTRAR');
	};

	return (
		<>
			<h1>Homepage</h1>
			<p>{data}</p>
			<Botao texto="Atualizar" botaoClicado={botaoAtualizarClicado} />
			{(mostraAlertaSucesso) && (
				<Alerta texto="Bem-vindo!" />
			)}
			{(mostraAlertaFalha) && (
				<Alerta texto="Login incorreto!" />
			)}
			
			<div>
				<CampoTexto etiqueta="Nome de usuário" textoAlterado={setNomeUsuario} />
				<CampoTexto etiqueta="Senha" textoAlterado={setSenha} />
				<Botao texto="Entrar" botaoClicado={botaoEntrarClicado} />
				<Botao texto="Cadastrar" botaoClicado={botaoCadastrarClicado} />
			</div>
		</>
	);
}

export default HomePage;