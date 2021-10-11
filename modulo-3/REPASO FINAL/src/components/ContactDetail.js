import ModalWindow from './ModalWindow';

function ContactDetail(props) {
	return (
		<section>
			<img
				className="card__img"
				src={props.user.photo}
				alt={props.user.name}
			/>
			<ul className="ml-1 mt-1">
				<li>Género: {props.user.gender}</li>
				<li>Email: {props.user.email}</li>
				<li>Nick: {props.user.username}</li>
				<li>Ciudad: {props.user.city}</li>
				<li>País: {props.user.country}</li>
			</ul>
		</section>
	);
}

export default ContactDetail;
