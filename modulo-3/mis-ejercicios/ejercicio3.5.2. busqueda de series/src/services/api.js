// Fichero src/services/api.js
const callToApi = (searchName) => {
	// Llamamos al API
	return fetch(`https://api.tvmaze.com/search/shows?q=${searchName}`) //
		.then((response) => response.json())
		.then((response) => {
			const series = response.map((serie) => {
				return {
					name: serie.show.name,
				};
			});
			// Retornamos los resultados del API al componente App
			return series;
		});
};
export default callToApi;
