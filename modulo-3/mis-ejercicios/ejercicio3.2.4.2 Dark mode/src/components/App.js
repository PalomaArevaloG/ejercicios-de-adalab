//Fichero src/components/App.js
import '../styles/App.scss';
import { useState } from 'react';
function App() {
	const [theme, setTheme] = useState('');
	const renderDarkMode = (ev) => {
		setTheme(theme === 'darkmode' ? '' : 'darkmode');
		/*if (theme === '') {
			setTheme('darkmode');
		} else {
			setTheme('');
		}*/
	};

	return (
		<div className={theme}>
			<main>
				<button onClick={renderDarkMode}>
					Des/activar el dark mode
				</button>
				<p>Tienes activado el dark mode</p>
				<p>lorem ipsum</p>
			</main>
		</div>
	);
}

export default App;
