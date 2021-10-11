const resultsLimit = 10;

function getContactsFromApi() {
	return fetch(`https://randomuser.me/api/?results=5${resultsLimit}`)
		.then((response) => response.json())
		.then((json) => {
			return json.results.map((contact) => {
				//limpio datos que me llegan y me quedo con la info que necesito
				return {
					name: contact.name.first + ' ' + contact.name.last,
					photo: contact.picture.medium,
					age: contact.dob.age,
					city: contact.location.city,
					gender: contact.gender,
					uuid: contact.login.uuid,
					email: contact.email,
					username: contact.login.username,
					country: contact.country,
				};
			});
		});
}
//aqui exportamos todas las funciones de contactsApi
// const objectToExport = {
// 	getContactsFromApi: getContactsFromApi,
// };
export default getContactsFromApi;
