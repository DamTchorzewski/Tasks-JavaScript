
// Wybieramy element <ul> z klasą "gallery" za pomocą metody querySelector().
// Ta metoda zwraca pierwszy element, który pasuje do selektora.
const gallery = document.querySelector(".gallery");

// Tworzymy tablicę obiektów z danymi o obrazach.
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// Tworzymy pusty ciąg znaków, który będzie zawierał kod HTML dla elementów galerii.
let galleryHTML = "";

// Pętla forEach() wykonuje funkcję dla każdego elementu w tablicy images.
// Ta funkcja dodaje kod HTML dla każdego elementu <li> z <img> za pomocą łańcuchów szablonowych.
// Kod HTML jest dodawany do ciągu znaków galleryHTML.
images.forEach(image => {
  galleryHTML += `
    <li>
      <img src="${image.url}" alt="${image.alt}">
    </li>
  `;
});
// Dodajemy kod HTML do elementu <ul> za pomocą metody insertAdjacentHTML().
// Metoda ta wstawia podany kod HTML przed, wewnątrz lub po elemencie, na którym ją wywołano.
// W tym przypadku wstawiamy kod HTML na końcu elementu <ul>.
gallery.insertAdjacentHTML("beforeend", galleryHTML);
