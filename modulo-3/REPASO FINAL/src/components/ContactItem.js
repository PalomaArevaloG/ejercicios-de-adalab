import { Link } from 'react-router-dom'; //para que no se recargue la pagina

function ContactItem(props) {
	console.log('Contact Item', props);
	return (
		<Link to={`./user/${props.contactData.uuid}`}>
			<img
				className="card__img"
				src={props.contactData.photo}
				alt={`Foto de ${props.contactData.photo}`}
				title={`Foto de ${props.contactData.name}`}
			/>
			<h4 className="card__title">{props.contactData.name}</h4>
			<p className="card__description">
				{props.contactData.city} / {props.contactData.gender}
			</p>
		</Link>
	);
}
export default ContactItem;
