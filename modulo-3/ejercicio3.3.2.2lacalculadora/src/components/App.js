// Fichero src/components/App.js
import '../styles/App.scss';

// Fichero src/components/App.js
import { useState } from 'react';

const App = () => {
	const [numberA, setNumberA] = useState(0);
	const [numberB, setNumberB] = useState(0);
	const [operacion, setOperacion] = useState('');
	// const [suma, setSuma] = useState('');
	// const [resta, setResta] = useState('');
	// const [multiplicacion, setMultiplicacion] = useState('');
	// const [division, setDivision] = useState('');

	const handleNumberA = (ev) => {
		setNumberA(ev.target.value);
	};

	const handleNumberB = (ev) => {
		setNumberB(ev.target.value);
	};
	let total;
	let operatorName;
	if (operacion === 'suma') {
		total = parseInt(numberA) + parseInt(numberB);
		operatorName = 'suma';
	} else if (operacion === 'resta') {
		total = parseInt(numberA) + parseInt(numberB);
		operatorName = 'resta';
	} else if (operacion === 'multiplicacion') {
		total = parseInt(numberA) * parseInt(numberB);
		operatorName = 'multiplicacion';
	} else if (operacion === 'multiplicacion') {
		total = parseInt(numberA) / parseInt(numberB);
		operatorName = 'division';
	}
	const handleOperacion = (ev) => {
		setOperacion(ev.target.value);
	};
	const handleForm = (ev) => {
		ev.preventDefault();
		console.log('Enviando datos al servidor...');
	};

	return (
		<div>
			<h1>La calculadora:</h1>
			<form onSubmit={handleForm}>
				<select
					name="operacion"
					id="operacion"
					value={operacion}
					onchange={handleOperacion}>
					<option value="suma">suma</option>
					<option value="resta">resta</option>
					<option value="multiplicacion">multiplicación</option>
					<option value="division">división</option>
				</select>

				<label>
					Escribe un número:
					<input type="number" name="name" onChange={handleNumberA} />
				</label>
				<label>
					Escribe otro número:
					<input
						type="number"
						name="email"
						onChange={handleNumberB}
					/>
				</label>
			</form>
			<p>
				La <strong>{operatorName}</strong> de <strong>{numberA}</strong>{' '}
				y<strong>{numberB}</strong> es
				<strong> {total}</strong>.
			</p>
		</div>
	);
};

export default App;
