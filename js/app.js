const loadCountries = () => {
  const url = "https://restcountries.com/v3.1/all";
  fetch(url)
    .then((res) => res.json())
    .then((data) => showDisplayCountries(data));
};

const showDisplayCountries = (countries) => {
  const countriesContainer = document.getElementById('countries-container');
  for (const country of countries) {
    const { name, capital, cca2 } = country;

    const div = document.createElement('div');
    div.classList.add("countries");
    div.innerHTML = `
      <p class="text-2xl"><strong>Name:</strong> ${name?.common}</p>
      <p class="text-lg"><strong>Capital:</strong> ${
        capital ? capital[0] : "No Capital"
      }</p>
      <button onclick="countryDetails('${cca2}')" class="btn btn-outline btn-primary mt-3">Details</button>
    `;
    countriesContainer.appendChild(div);
  }
};

const countryDetails = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showDetails(data[0]));
};

const showDetails = (details) => {
  const countryDetails = document.getElementById("country-details");
  const { name, flags } = details;
  countryDetails.innerHTML = `
    <p class="text-2xl"><strong>Name: ${name?.common}</strong></p>
    <img src="${flags.png}" class="my-3" alt="" />
  `;
};

loadCountries();
