import ContactItem from './ContactItem';

function ContactList(props) {
	console.log('Contact List', props);
	//recorremos el array de contactos
	const html = props.data.map((contactData) => (
		// <li className="card" key={index}> tb se puede usar pero usaremos uuid que nos traemos de contactsApi
		<li className="card" key={contactData.uuid}>
			<ContactItem contactData={contactData} />
		</li>
	));
	return <ul className="cards">{html}</ul>;
}
export default ContactList;
