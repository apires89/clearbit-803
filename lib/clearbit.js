const authorization = "Bearer sk_030c27ff6da9e9cb745735b1ab17a55a";
// TODO

// save the ids as variables

const form = document.getElementById('clearbitForm');
// const name = document.getElementById('userName');
// const email = document.getElementById('userEmail');
// const userBio = document.getElementById('userBio');
// const userLocation = document.getElementById('userLocation');

// sudo code

//1. Add Listener to the form

form.addEventListener('submit', (event) => {
  console.log(event);
  //2. event.preventDefault()!!
  event.preventDefault();
  const emailValue = document.getElementById("clearbitEmail").value
  callClearbitApi(emailValue)
})

//3. Send an AJAX request to clearbit API using fetch

const callClearbitApi = (email) => {
  const url = `https://person-stream.clearbit.com/v2/combined/find?email=${email}`;
  fetch(url, { headers: { Authorization: authorization }
  })
  .then(response => response.json())
  .then((data) => {
    setUserInfo(data)
  });
};
//4. read the JSON received and display the results

const setUserInfo = (json) => {
  const name = document.getElementById('userName');
  const email = document.getElementById('userEmail');
  const userBio = document.getElementById('userBio');
  const userLocation = document.getElementById('userLocation');
  name.innerText = json.person.name.fullName;
  email.innerText = json.person.email;
  userBio.innerText = json.person.bio;
  userLocation.innerText = json.person.geo.city;
}
