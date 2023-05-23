// Napisz skrypt tworzenia i usuwania kolekcji elementów. Użytkownik wprowadza liczbę elementów do input i naciska przycisk Utwórz, co rozpoczyna tworzenie się kolekcji. Po naciśnięciu przycisku Usuń, kolekcja elementów zostaje usunięta.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Utwórz funkcję createBoxes(amount), która bierze jeden parametr - liczbę. Funkcja tworzy tyle <div>, ile ukazano w amount i dodaje je do div#boxes.

// Wymiary pierwszego <div> - 30px na 30px.
// Każdy następny element powinien być szerszy i wyższy od poprzedniego o 10px.
// Wszystkie elementy powinny mieć losowy kolor tła w formacie NEX. Użyj gotowej funkcji getRandomHexColor aby otrzymać kolor.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Utwórz funkcję destroyBoxes(), która usuwa zawartość div#boxes, tym samym usuwając wszystkie utworzone elementy.



const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  // Usuń wszystkie istniejące div#boxes, jeśli istnieją
  while (boxesContainer.firstChild) {
    boxesContainer.removeChild(boxesContainer.firstChild);
  }
  
  // Stwórz nowe div#boxes
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  // Usuń wszystkie div#boxes
  while (boxesContainer.firstChild) {
    boxesContainer.removeChild(boxesContainer.firstChild);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value);
  createBoxes(amount);
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});


//  Ten kod obsługuje trzy elementy: input, który służy do wprowadzania liczby elementów, oraz dwa przyciski - Utwórz i Usuń. Gdy użytkownik wprowadzi liczbę elementów i kliknie przycisk Utwórz, funkcja createBoxes zostanie wywołana z liczbą elementów wprowadzoną przez użytkownika jako parametr. Ta funkcja tworzy tyle elementów div, ile wynosi podana liczba, dodając je do div#boxes. Każdy element ma różne wymiary i kolor tła generowany za pomocą funkcji getRandomHexColor.

// Gdy użytkownik kliknie przycisk Usuń, funkcja destroyBoxes zostanie wywołana, usuwając wszystkie utworzone elementy z div#boxes.