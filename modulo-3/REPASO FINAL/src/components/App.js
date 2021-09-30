// Fichero src/components/App.js

import '../styles/App.scss';
import getContactsFromApi from '../services/contactsApi'; //importo las funciones de objecttoexport
import { useEffect, useState } from 'react';
import ContactList from './ContactList';

function App() {
	const [data, setData] = useState([]);
	const [searchName, setSearchName] = useState('');
	const [searchGender, setSearchGender] = useState('all');
	useEffect(() => {
		//llamo al fetch
		getContactsFromApi().then((initialData) => {
			console.log(initialData);
			setData(initialData); //lo guardo en la variable estado
		});
	}, []); //lo dejo vacio xq quiero que se ejecute cuando se habra la pagina

	//filtro
	const handleSearchName = (ev) => {
		setSearchName(ev.currentTarget.value);
	};
	const handleSearchGender = (ev) => {
		setSearchGender(ev.currentTarget.value);
	};
	const filteredData = data
		.filter((contact) =>
			contact.name
				.toLocaleLowerCase()
				.includes(searchName.toLocaleLowerCase())
		)
		.filter(
			(contact) =>
				searchGender === 'all' || searchGender === contact.gender
		);
	return (
		<>
			<h1 className="title--big">Directorio de personas</h1>
			<div className="col2">
				<section>
					<form>
						<label
							className="form__label display-block"
							htmlFor="name">
							Filtrar por nombre:
						</label>
						<input
							className="form__input-text"
							type="text"
							name="name"
							id="name"
							value={searchName}
							onChange={handleSearchName}
						/>
						<label
							className="form__label display-block"
							htmlFor="gender">
							Género:
						</label>
						<select
							className="form__input-text"
							name="gender"
							id="gender"
							value={searchGender}
							onChange={handleSearchGender}>
							<option value="all">Todos</option>
							<option value="female">Mujer</option>
							<option value="male">Hombre</option>
							<option value="no-binary">No binario</option>
						</select>
						<label
							className="form__label display-block"
							htmlFor="gender">
							Ciudad:
						</label>
						<label className="display-block">
							<input
								type="checkbox"
								name="location"
								value="Stockach"
							/>
							Stockach
						</label>
						<label className="display-block">
							<input
								type="checkbox"
								name="location"
								value="Shelbourne"
							/>
							Shelbourne
						</label>
						<label className="display-block">
							<input
								type="checkbox"
								name="location"
								value="Valencia"
							/>
							Valencia
						</label>
						<label className="display-block">
							<input
								type="checkbox"
								name="location"
								value="Köyliö"
							/>
							Köyliö
						</label>
						<label className="display-block">
							<input
								type="checkbox"
								name="location"
								value="Madrid"
							/>
							Madrid
						</label>
						<label className="display-block">
							<input
								type="checkbox"
								name="location"
								value="Orange"
							/>
							Orange
						</label>
						<label className="display-block">
							<input
								type="checkbox"
								name="location"
								value="Folkestad"
							/>
							Folkestad
						</label>
						<label className="display-block">
							<input
								type="checkbox"
								name="location"
								value="Ely"
							/>
							Ely
						</label>
						<label className="display-block">
							<input
								type="checkbox"
								name="location"
								value="Invercargill"
							/>
							Invercargill
						</label>
						<label className="display-block">
							<input
								type="checkbox"
								name="location"
								value="Muğla"
							/>
							Muğla
						</label>
					</form>
				</section>
				<section>
					<ContactList data={filteredData} />
				</section>
			</div>
		</>
	);
}

export default App;
