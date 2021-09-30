// Fichero src/components/ModalWindow.js
import '../styles/Tooltip.scss';
import { useState } from 'react';
const Tooltip = (props) => {
	const [tooltip, setTooltip] = useState('');
	const renderOnHover = (ev) => {
		setTooltip(tooltip === '' ? 'hidden' : '');
	};
	return (
		<section className="tooltip">
			<span className="sign" onMouseOver={renderOnHover}>
				?
			</span>

			{props.children}
		</section>
	);
};

export default Tooltip;
