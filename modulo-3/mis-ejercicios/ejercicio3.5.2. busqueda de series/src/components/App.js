// Fichero src/components/App.js
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import '../styles/App.scss';
const App = () => {
	const [series, setSeries] = useState([]);
	const [searchName, setSearchName] = useState('');
	useEffect(() => {
		callToApi(searchName).then((response) => {
			setSeries(response);
		});
	}, [searchName]);

	// Eventos

	const handleSearchName = (ev) => {
		setSearchName(ev.target.value);
	};

	// Renderizado

	const renderSeries = () => {
		return series.map((serie, index) => {
			return <li key={index}>Nombre: {serie.name}</li>;
		});
	};

	return (
		<div>
			<h1>Llamar al API de Series:</h1>

			<form>
				<label htmlFor="name">Busca por el nombre de tu serie:</label>
				<input
					type="text"
					name="name"
					id="name"
					value={searchName}
					onChange={handleSearchName}
				/>
			</form>

			<h2>Series con el nombre: {searchName}</h2>
			<ul>{renderSeries()}</ul>
		</div>
	);
};

export default App;
