// Fichero src/components/App.js
import { useState } from 'react';
import '../styles/App.scss';

function App() {
	const [text, setText] = useState();
	const handleSubmit = (ev) => {
		// Aquí detenemos el envío del formulario
		ev.preventDefault();
		// Aquí enviamos los datos al servidor con un fetch o lo que sea
	};
	const handleText = (ev) => {
		let originalText = ev.currentTarget.value;
		let newText = originalText.replace(/[aeiou]/gi, 'i');
		setText(newText);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<p>{text}</p>
				<textarea
					id="comments"
					name="comments"
					rows="8"
					cols="80"
					onChange={handleText}></textarea>
			</form>
		</div>
	);
}

export default App;
