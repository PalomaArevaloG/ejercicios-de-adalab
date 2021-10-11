function FilterByCity(props) {
	return (
		<>
			<label className="form__label display-block" htmlFor="gender">
				Ciudad:
			</label>
			<label className="display-block">
				<input type="checkbox" name="location" value="Stockach" />
				Stockach
			</label>
			<label className="display-block">
				<input type="checkbox" name="location" value="Shelbourne" />
				Shelbourne
			</label>
			<label className="display-block">
				<input type="checkbox" name="location" value="Valencia" />
				Valencia
			</label>
			<label className="display-block">
				<input type="checkbox" name="location" value="Köyliö" />
				Köyliö
			</label>
			<label className="display-block">
				<input type="checkbox" name="location" value="Madrid" />
				Madrid
			</label>
			<label className="display-block">
				<input type="checkbox" name="location" value="Orange" />
				Orange
			</label>
			<label className="display-block">
				<input type="checkbox" name="location" value="Folkestad" />
				Folkestad
			</label>
			<label className="display-block">
				<input type="checkbox" name="location" value="Ely" />
				Ely
			</label>
			<label className="display-block">
				<input type="checkbox" name="location" value="Invercargill" />
				Invercargill
			</label>
			<label className="display-block">
				<input type="checkbox" name="location" value="Muğla" />
				Muğla
			</label>
		</>
	);
}

export default FilterByCity;
