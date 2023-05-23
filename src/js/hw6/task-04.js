// Licznik składa się ze spana i przycisków, które, po ich kliknięciu, powinny zwiększać i zmniejszać jego wartość na jednostkę.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Utwórz zmienną counterValue w której będzie przechowywana aktualna wartość licznika i inicjalizuj wartość 0.
// Dodaj click listeners do przycisków, wewnątrz których zwiększaj i zmniejszaj wartość licznika.
// Aktualizuj interfejs nową wartością zmiennej counterValue.


// pobierz elementy interfejsu
const counter = document.getElementById('counter');
  const valueEl = document.getElementById('value');
  const decrementBtn = counter.querySelector('[data-action="decrement"]');
  const incrementBtn = counter.querySelector('[data-action="increment"]');

  // zainicjuj wartość licznika
  let counterValue = 0;

  // funkcja do aktualizacji wartości licznika i interfejsu
  function updateCounterValue(newValue) {
    counterValue = newValue;
    valueEl.textContent = newValue;
  }

  // dodaj event listeners do przycisków
  decrementBtn.addEventListener('click', function() {
    updateCounterValue(counterValue - 1);
  });

  incrementBtn.addEventListener('click', function() {
    updateCounterValue(counterValue + 1);
  });