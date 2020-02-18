import axios from 'axios';

const baseUrl = 'https://randomuser.me/api/';

//const buildUrl = id => `${baseUrl}?id=${id}`;

//console.log (buildUrl)

/*function formatTypes(types) {
  return types.map(({ type }) => type.name);
}*/

function formatUser(user) {
  //const { id,city, email } = user;
  //const { front_default } = sprites;
  
  return {
    id: user.id.name + user.id.value,
    city: user.location.city,
    email:user.email,
    streetName: user.location.street.name,
    gender: user.gender,
    picture: user.picture.large,
  }
}

export async function getUserById(id) {
  const url = `${baseUrl}?id=${id}`

  const { data } = await axios.get(url);
  return formatUser(data.results[0]);
}

/*gender: "female"
name: {title: "Miss", first: "Diana", last: "Horn"}
title: "Miss"
first: "Diana"
last: "Horn"
location: {street: {number: 8730, name: "Gartenweg"}, city: "Heideck", state: "Sachsen-Anhalt",…}
street: {number: 8730, name: "Gartenweg"}
city: "Heideck"
state: "Sachsen-Anhalt"
country: "Germany"
postcode: 91509
coordinates: {latitude: "-42.4539", longitude: "15.8200"}
timezone: {offset: "+9:30", description: "Adelaide, Darwin"}
email: "diana.horn@example.com"
login: {uuid: "353ed55d-e022-411a-a654-1087f7ce5cb8", username: "crazybutterfly127", password: "dutch",…}
dob: {date: "1972-02-19T13:55:47.295Z", age: 48}
registered: {date: "2010-09-20T04:02:10.344Z", age: 10}
phone: "0478-3775804"
cell: "0171-1553747"
id: {name: "", value: null}
picture: {large: "https://randomuser.me/api/portraits/women/91.jpg",…}
nat: "DE"*/