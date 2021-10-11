// Fichero src/components/App.js

import '../styles/App.scss';
import getContactsFromApi from '../services/contactsApi'; //importo las funciones de objecttoexport
import { useEffect, useState } from 'react';
import ContactList from './ContactList';
import Filters from './Filters';
import ContactDetail from './ContactDetail';
import { Route, Switch, useRouteMatch } from 'react-router';
import ls from '../services/ls.js';

function App() {
	const [data, setData] = useState([]);
	const [searchName, setSearchName] = useState('');
	const [searchGender, setSearchGender] = useState('all');
	useEffect(() => {
		//cache
		if (ls.get('contacts', []).length > 0) {
			console.log(ls.get('contacts', []));
			setData(ls.get('contacts', []));
		} else {
			//llamo al fetch
			getContactsFromApi().then((initialData) => {
				console.log(initialData);
				setData(initialData); //lo guardo en la variable estado
				ls.set('contacts', initialData);
			});
		}
	}, []);

	//filtro
	const handleSearchName = (ev) => {
		setSearchName(ev.currentTarget.value);
	};
	const handleSearchGender = (ev) => {
		setSearchGender(ev.currentTarget.value);
	};
	//rutas
	const routeData = useRouteMatch('/user/:id');
	const contactId = routeData !== null ? routeData.params.id : '';

	const selectedContact = data.find((contact) => contact.uuid === contactId);

	console.log(selectedContact);

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
				<Switch>
					<Route path="/user/:id">
						{/* tendrá otra pagina (ruta) */}

						<section>
							<ContactDetail user={selectedContact} />
						</section>
					</Route>
					<Route exact path="/">
						{/* switch cogerá el primer route que empieza por / por lo que / se pone alfinal con un exact*/}
						<section>
							<Filters
								searchName={searchName}
								searchGender={searchGender}
								handleSearchName={handleSearchName}
								handleSearchGender={handleSearchGender}
							/>
						</section>
						<section>
							<ContactList data={filteredData} />
						</section>
					</Route>
					<Route>
						{/* se pone al final */}
						<section>Oh! pagina equivocada</section>
					</Route>
				</Switch>
			</div>
		</>
	);
}

export default App;
