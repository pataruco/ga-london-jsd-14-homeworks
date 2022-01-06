/*
1. Fetch all data's
2. Iterate for each country
3. and display name, flag
*/

const url = 'https://restcountries.com/v3.1/all';
const countriesListElement = document.getElementById('list');
// const countriesList = document.querySelector('#list'); /* why not by this way ?

// Fetch Data's
async function fetchCountries() {
  try {
    const response = await window.fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    }
    console.warn('There is a problem');
  } catch (error) {
    console.error({ error });
  }
}

// append list
const displayCountries = async () => {
  const countries = await fetchCountries();

  countries.forEach((country) => {
    console.log(country);
    countriesListElement.innerHTML =
      countriesListElement.innerHTML +
      `
      <li>
        <h2>${country.name.official}</h2>
        <picture>
          <img src="${country.flags.svg}" alt="${country.name.official}" />
        </picture>
      </li>

    `;
  });
};

displayCountries();
