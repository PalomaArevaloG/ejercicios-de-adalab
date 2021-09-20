// Fichero src/components/App.js
import '../styles/App.scss';

function App() {
	const handleInput = (ev) => {
		console.log(`la tecla pulsada ha sido`, ev.key);
		ev.preventDefault();
	};
	return (
		<div>
			<form>
				<input onKeyUp={handleInput} type="text" />
			</form>
		</div>
	);
}

export default App;
