
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

// dodajemy nasłuchiwacz zdarzeń na wprowadzanie danych wejściowych
input.addEventListener('input', debounce(() => {
// przypisujemy wartość wprowadzoną do zmiennej i usuwamy białe znaki z początku i końca ciągu znaków
  let name = input.value.trim();
// jeśli nie ma wartości wprowadzonej do pola wyszukiwania
  if (!input.value) {
 //usuwamy informacje o kraju
    countryInfo.innerHTML = '';
// usuwamy listę krajów
    countryList.innerHTML = '';
// przerywamy działanie funkcji
      return;
    }
    
  fetchCountries(name)
// pobieramy informacje o kraju na podstawie wprowadzonej nazwy
    .then(countriesList)
// jeśli informacje zostały pobrane, wywołujemy funkcję countriesList
    .catch(showError)
// jeśli wystąpił błąd, wywołujemy funkcję showError
    .finally(() => name === '');
// na koniec wykonujemy funkcję, która resetuje wartość zmiennej name
  }, DEBOUNCE_DELAY)
);

//funkcja, która wyświetla informacje o kraju lub listę krajów na podstawie pobranych danych
function countriesList(data) {
// jeśli liczba krajów jest większa niż 10
  if (data.length > 10) {
// usuwamy informacje o kraju
    countryInfo.innerHTML = '';
  // usuwamy listę krajów
    countryList.innerHTML = '';
    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    return;
  }
// jeśli liczba krajów wynosi 1
  else if (data.length === 1) {
// usuwamy listę krajów
    countryList.innerHTML = '';
// przypisujemy dane kraju do zmiennej countryData
    const countryData = data[0];
//treść wyszukiwania 
    countryInfo.innerHTML = `
    <div>
    <img class="img_info" src="${countryData.flags.svg}" alt="${
      countryData.name.official
    }"></img>
    <p class="country_name"><b>${countryData.name.official}</b></p>
    </div>
    <div>
    <ul>
    <li class="country_info"><b>Capital:</b> ${countryData.capital}</li>
    <li><b>Population:</b> ${countryData.population}</li>
    <li><b>Languages:</b> ${Object.values(countryData.languages).join('')}</li>
    </ul>
    </div>`;
  } else {
    if (input.value) {
      countryList.innerHTML = '';
    }
    for (const el of data) {
      countryInfo.innerHTML = '';
      countryList.insertAdjacentHTML(
        'beforeend',
        `<div>
        <img class="img_list" width="300" height="200" src="${el.flags.svg}" alt="${el.name.official}">
        </img>
        <p class="list_name">${el.name.official}</p>
        </div>`
      );
    }
  }
}
function showError() {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}