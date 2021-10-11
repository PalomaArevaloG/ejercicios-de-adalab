import FilterByCity from './FilterByCity';
import FilterByGender from './FilterByGender';
import FilterByName from './FilterByName';
//uso las props de app.js
function Filters(props) {
	return (
		<form>
			<FilterByName
				searchName={props.searchName}
				handleSearchName={props.handleSearchName}
			/>
			<FilterByGender
				searchGender={props.searchGender}
				handleSearchGender={props.handleSearchGender}
			/>
			<FilterByCity />
		</form>
	);
}

export default Filters;
