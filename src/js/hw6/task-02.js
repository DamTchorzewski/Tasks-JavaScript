
// Napisz skrypt, który dla każdego elementu tablicy ingredients:

// Utworzy oddzielny element <li>. Koniecznie użyj metody document.createElement().
// Doda nazwę elementu jako jego zawartość tekstową.
// Doda do elementu klasę item.
// Po czym umieści wszystkie <li> na liście podczas jednej operacji ul#ingredients.
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Wybierz ul#ingredients
const ul = document.querySelector("#ingredients");

// Iteruj przez każdy element w tablicy ingredients
ingredients.forEach((ingredient) => {
  // Utwórz nowy element <li>
  const li = document.createElement("li");

  // Dodaj klasę "item" do elementu <li>
  li.classList.add("item");

  // Dodaj tekst składnika do elementu <li>
  li.textContent = ingredient;

  // Dodaj element <li> do listy <ul>
  ul.appendChild(li);
});
