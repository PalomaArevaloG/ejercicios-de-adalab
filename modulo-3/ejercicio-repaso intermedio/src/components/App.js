import { useEffect, useState } from 'react';
import '../styles/App.scss';
import initialData from '../data/contacts.json';
import ls from '../services/local-storage';
console.log(ls);
function App() {
	const [data, setData] = useState(initialData);
	const [search, setSearch] = useState('');
	const [newName, setNewName] = useState('');
	const [newLastname, setNewLastname] = useState('');
	const [newPhone, setNewPhone] = useState('');
	const [newEmail, setNewEmail] = useState('');
	const [name, setName] = useState(ls.get('name', ''));
	const [lastname, setLastname] = useState(ls.get('lastname', ''));
	const [phone, setPhone] = useState(ls.get('phone', ''));
	const [email, setEmail] = useState(ls.get('email', ''));
	//local storage

	useEffect(() => {
		// Guardamos el nombre y el email en el local storage
		ls.set('name', name);
		ls.set('lastname', lastname);
		ls.set('phone', phone);
		ls.set('email', email);
		//ls.set('data', data);
		console.log('Ha cambiado el nombre o el email');
	}, [name, email, lastname, phone]);

	//para buscar
	const handleChangeSearch = (ev) => {
		setSearch(ev.currentTarget.value);
	};
	//para crear nuevos contactos
	const handleNewName = (ev) => {
		setNewName(ev.currentTarget.value);
		setName(ev.target.value);
	};
	const handleNewLastname = (ev) => {
		setNewLastname(ev.currentTarget.value);
		setLastname(ev.target.value);
	};
	const handleNewPhone = (ev) => {
		setNewPhone(ev.currentTarget.value);
		setPhone(ev.target.value);
	};
	const handleNewEmail = (ev) => {
		setNewEmail(ev.currentTarget.value);
		setEmail(ev.target.value);
	};
	const handleClick = (ev) => {
		ev.preventDefault();

		const newContact = {
			name: newName,
			lastname: newLastname,
			phone: newPhone,
			email: newEmail,
		};
		setData([...data, newContact]);
		setNewName('');
		setNewLastname('');
		setNewPhone('');
		setNewEmail('');
	};
	//para filtrar
	const dataFiltered = data.filter(
		(contact) =>
			contact.name
				.toLocaleLowerCase()
				.includes(search.toLocaleLowerCase()) ||
			contact.lastname
				.toLocaleLowerCase()
				.includes(search.toLocaleLowerCase())
	); //
	const oneContact = data[0];
	//para pintar lo que se filtre (si pongo data.map me pone todo lo del json)
	const htmlContactList = dataFiltered.map((oneContact, index) => (
		<li className="contact__item" key={index}>
			<p className="contact__name">
				<label className="contact__label">Nombre:</label>
				{`${oneContact.name}  
				${oneContact.lastname}`}
			</p>
			<p className="contact__phone">
				<label className="contact__label">Teléfono:</label>
				<a
					href={`tel: ${oneContact.phone}`}
					title="Pulsa aquí para llamar a Lola">
					{oneContact.phone}
				</a>
			</p>
			<p className="contact__mail">
				<label className="contact__label">Email:</label>
				<a
					href={`mailto:${oneContact.email}`}
					title="Pulsa aquí para escribir a Lola">
					{oneContact.email}
				</a>
			</p>
		</li>
	));

	// const htmlOneContact = (
	// 	<li className="contact__item">
	// 		<p className="contact__name">
	// 			<label className="contact__label">Nombre:</label>
	// 			{oneContact.name}
	// 			{oneContact.lastname}
	// 		</p>
	// 		<p className="contact__phone">
	// 			<label className="contact__label">Teléfono:</label>
	// 			<a
	// 				href={`tel: ${oneContact.phone}`}
	// 				title="Pulsa aquí para llamar a Lola">
	// 				{oneContact.phone}
	// 			</a>
	// 		</p>
	// 		<p className="contact__mail">
	// 			<label className="contact__label">Email:</label>
	// 			<a
	// 				href={`mailto:${oneContact.email}`}
	// 				title="Pulsa aquí para escribir a Lola">
	// 				{oneContact.email}
	// 			</a>
	// 		</p>
	// 	</li>
	// );
	console.log(oneContact);

	//html
	return (
		<div className="page">
			{/* header */}
			<header className="header">
				<h1 className="header__title">Mi agenda de contactos</h1>
				<form>
					<input
						className="header__search"
						autoComplete="off"
						type="search"
						name="search"
						placeholder="Filtrar contactos por nombre"
						onChange={handleChangeSearch}
						value={search}
					/>
				</form>
			</header>

			<main>
				{/* contact list */}
				<ul className="contact__list">{htmlContactList}</ul>

				{/* new contact */}
				<form className="new-contact__form">
					<h2 className="new-contact__title">
						Añade un nuevo contacto
					</h2>
					<input
						className="new-contact__input"
						type="text"
						name="name"
						id="name"
						placeholder="Nombre"
						onChange={handleNewName}
						value={newName}
					/>
					<input
						className="new-contact__input"
						type="text"
						name="lastname"
						id="lastname"
						placeholder="Apellidos"
						onChange={handleNewLastname}
						value={newLastname}
					/>
					<input
						className="new-contact__input"
						type="phone"
						name="phone"
						id="phone"
						placeholder="Teléfono"
						onChange={handleNewPhone}
						value={newPhone}
					/>
					<input
						className="new-contact__input"
						type="email"
						name="email"
						id="email"
						placeholder="Email"
						onChange={handleNewEmail}
						value={newEmail}
					/>
					<input
						className="new-contact__btn"
						type="submit"
						value="Añadir"
						onClick={handleClick}
					/>
				</form>
			</main>
		</div>
	);
}

export default App;
