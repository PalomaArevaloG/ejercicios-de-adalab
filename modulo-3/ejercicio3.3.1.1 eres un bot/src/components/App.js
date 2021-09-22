// Fichero src/components/App.js
import '../styles/App.scss';
import { useState } from 'react';

const App = () => {
	const [macarrones, setMacarrones] = useState(false);
	const [patatas, setPatatas] = useState(false);
	const [nueces, setNueces] = useState(false);
	const [huevos, setHuevos] = useState(false);
	const [cebolla, setCebolla] = useState(false);
	const [cerveza, setCerveza] = useState(false);
	const handleMacarrones = (ev) => {
		setMacarrones(ev.target.checked);
	};
	const handlePatatas = (ev) => {
		setPatatas(ev.target.checked);
	};
	const handleNueces = (ev) => {
		setNueces(ev.target.checked);
	};
	const handleHuevos = (ev) => {
		setHuevos(ev.target.checked);
	};
	const handleCebolla = (ev) => {
		setCebolla(ev.target.checked);
	};
	const handleCerveza = (ev) => {
		setCerveza(ev.target.checked);
	};
	const renderConcebollista = () => {
		if (
			patatas &&
			cebolla &&
			huevos &&
			!cerveza &&
			!nueces &&
			!macarrones
		) {
			return `Eres una persona concebollista`;
		} else if (
			!patatas &&
			!cebolla &&
			!huevos &&
			cerveza &&
			nueces &&
			macarrones
		) {
			return `Eres un robot sin paladar`;
		} else {
			return '';
		}
	};

	return (
		<div>
			<form>
				<h1>Selecciona los ingredientes de la tortilla de patatas</h1>

				<label htmlFor="macarrones">
					<input
						id="macarrones"
						type="checkbox"
						value="macarrones"
						name="ingredientes"
						onChange={handleMacarrones}
						ckecked={macarrones}
					/>
					Macarrones
				</label>
				<label htmlFor="patatas">
					<input
						id="patatas"
						type="checkbox"
						value="patatas"
						name="ingredientes"
						onChange={handlePatatas}
						ckecked={patatas}
					/>
					Patatas
				</label>
				<label htmlFor="nueces">
					<input
						id="nueces"
						type="checkbox"
						value="nueces"
						name="ingredientes"
						onChange={handleNueces}
						ckecked={nueces}
					/>
					Nueces
				</label>
				<label htmlFor="huevos">
					<input
						id="huevos"
						type="checkbox"
						value="huevos"
						name="ingredientes"
						onChange={handleHuevos}
						ckecked={huevos}
					/>
					Huevos
				</label>
				<label htmlFor="cebolla">
					<input
						id="cebolla"
						type="checkbox"
						value="cebolla"
						name="ingredientes"
						onChange={handleCebolla}
						ckecked={cebolla}
					/>
					Cebolla
				</label>
				<label htmlFor="cerveza">
					<input
						id="cerveza"
						type="checkbox"
						value="cerveza"
						name="ingredientes"
						onChange={handleCerveza}
						ckecked={cerveza}
					/>
					Cerveza
				</label>
				<p>{renderConcebollista()}</p>
			</form>
		</div>
	);
};

export default App;
