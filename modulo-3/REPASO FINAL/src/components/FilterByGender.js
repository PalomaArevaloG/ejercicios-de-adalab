function FilterByGender(props) {
	return (
		<>
			<label className="form__label display-block" htmlFor="gender">
				Género:
			</label>
			<select
				className="form__input-text"
				name="gender"
				id="gender"
				value={props.searchGender}
				onChange={props.handleSearchGender}>
				<option value="all">Todos</option>
				<option value="female">Mujer</option>
				<option value="male">Hombre</option>
				<option value="no-binary">No binario</option>
			</select>
		</>
	);
}

export default FilterByGender;
