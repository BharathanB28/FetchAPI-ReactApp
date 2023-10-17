// this is an arrow function

const loadCountryAPI = () =>{

// fetch url of rest country from website
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => displayCountries(data))
}


// displaying all countries
const displayCountries = root =>{
// console.log(countries);
const countriesHTML = root.map(country => getCountry(country));
// displaying div to html
const container = document.getElementById('root');
container.innerHTML = countriesHTML.join(' ');
}
  

// get data and set it to html
const getCountry = (country) =>{
console.log(country)
return `
  <div class="card-deck bg-#23404C">
  <div class="card card-block text-center">
  <div class="card-header text-white bg-black">
  <h2>${country.name.common}</h2>
  </div>
  <div class="card-body" style="background: linear-gradient(to right,#D0C09D,#4E5D59); color: white;">
  <img src="${country.flags.png}">
  <h4>Capital: ${country.capital}</h4>
  <h4>Regoin: ${country.region}</h4>
  <h4>Country Code: ${country.cca3}</h4>
  <div class="btn btn-primary bg-transparent border-white">Click for Weather</div>
  </div>        
  </div>
  </div>`
  }


  // call the funtion to get output in console
  loadCountryAPI()