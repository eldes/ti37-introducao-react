import Botao from '../components/Botao';

const HomePage = function() {
	const data = '17h26';

	return (
		<>
			<h1>Homepage</h1>
			<p>{data}</p>
			<Botao />
		</>
	);
}

export default HomePage;