// Fichero src/components/App.js
import '../styles/App.scss';
// Fichero src/components/App.js
// Importamos useState desde React porque lo vamos a necesitar más abajo
import { useState } from 'react';

// Creamos la función o componente App. Esta vez lo creamos con una función arrow.
const App = () => {
	const [number, setNumber] = useState(0);
	let counter = 0;
	const increaseNumber = (ev) => {
		for (let i = 0; i < 10; i++) {
			counter = number + 1;
			return setNumber(counter);
		}
	};
	const decreaseNumber = (ev) => {
		for (let i = 0; i < 10; i++) {
			counter = number - 1;
			return setNumber(counter);
		}
	};
	const resetNumber = (ev) => {
		for (let i = 0; i < 10; i++) {
			return setNumber(0);
		}
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
