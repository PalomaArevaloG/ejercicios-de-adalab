const Preview = (props) => {
	const handleName = (ev) => {
		setName(ev.target.value);
	};

	const handleEmail = (ev) => {
		setEmail(ev.target.value);
	};

	const handleRegion = (ev) => {
		setRegion(ev.target.value);
	};

	const handlePaymentType = (ev) => {
		setPaymentType(ev.target.value);
	};

	const handleLegalTerms = (ev) => {
		// Como lo que nos interesa es si está activo o no guardamos el checked
		setLegalTerms(ev.target.checked);
	};

	return (
		<div className="preview">
			<h2>Tus datos son:</h2>
			<ul>
				<li>Nombre: {name}</li>
				<li>Email: {email}</li>
				<li>Región: {region}</li>
				<li>Método de pago: {renderPaymentTypeText()}</li>
				<li>
					Has aceptado nuestros términos legales:{' '}
					{legalTerms === true ? 'Sí' : 'No'}
				</li>
			</ul>
		</div>
	);
};
export default Preview;
