// Napisz skrypt, który:

// Policzy i wprowadzi do wiersza poleceń liczbę kategorii w ul#categories, czyli elementy li.item.
// Dla każdego elementu li.item na liście ul#categories, znajdzie i wprowadzi do wiersza poleceń tekst nagłówka elementu (tag <h2>) i liczbę elementów w kategorii (wszystkich <li>).
// W konsekwencji, w wierszu poleceń znajdą się takie komunikaty.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// Pobieramy element listy kategorii, w którym znajdują się elementy "li" z klasą "item"
const categoriesList = document.querySelector('#categories');
// Tworzymy kolekcję elementów "li" z klasą "item" znajdujących się w elemencie o id "categories"
const categoriesItems = categoriesList.querySelectorAll('.item');
// Wyświetlamy w konsoli ilość elementów "li" z klasą "item" znajdujących się w elemencie o id "categories"
console.log(`Number of categories: ${categoriesItems.length}`);
// Iterujemy po każdym elemencie "li" z klasą "item" i wyświetlamy w konsoli nazwę kategorii (tekst z elementu "h2")
// oraz liczbę elementów w kategorii (ilość elementów "li" wewnątrz elementu "li" z klasą "item")
categoriesItems.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryElements = item.querySelectorAll('li').length;
  
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});