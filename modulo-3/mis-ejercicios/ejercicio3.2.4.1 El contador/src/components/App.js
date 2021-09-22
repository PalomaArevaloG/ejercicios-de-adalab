// Fichero src/components/App.js
import { useState } from 'react';
import '../styles/App.scss';
// Fichero src/components/App.js
// Importamos useState desde React porque lo vamos a necesitar más abajo

// Creamos la función o componente App. Esta vez lo creamos con una función arrow.
const App = () => {
	const [number, setNumber] = useState(0);

	const increaseNumber = (ev) => {
		setNumber(number + 1);
	};
	const decreaseNumber = (ev) => {
		setNumber(number - 1);
	};
	const resetNumber = (ev) => {
		setNumber(0);
	};
	return (
		<div>
			<p>Contador : {number}</p>
			<button onClick={increaseNumber}>Incrementa</button>
			<button onClick={decreaseNumber}>Decrementa</button>
			<button onClick={resetNumber}>Resetea</button>
		</div>
	);
};

export default App;
