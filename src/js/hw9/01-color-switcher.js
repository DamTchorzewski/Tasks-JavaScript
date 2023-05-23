// Wybieramy przyciski i element body z dokumentu HTML
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.body;

// Inicjalizujemy zmienną przechowującą ID interwału
let intervalId = null;

// Funkcja zmieniająca kolor tła body na losową wartość w formacie heksadecymalnym
function changeBackgroundColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
}

// Funkcja uruchamiająca interwał zmieniający kolor tła
function startBackgroundColorChange() {
  // Wyłączamy przycisk "Start"
  startButton.disabled = true;
  // Ustawiamy interwał na wywołanie funkcji changeBackgroundColor co 1000 milisekund
  intervalId = setInterval(changeBackgroundColor, 1000);
}

// Funkcja zatrzymująca interwał i włączająca przycisk "Start"
function stopBackgroundColorChange() {
  // Włączamy przycisk "Start"
  startButton.disabled = false;
  // Zatrzymujemy interwał
  clearInterval(intervalId);
}

// Dodajemy event listenery do przycisków i funkcję getRandomHexColor()
startButton.addEventListener('click', startBackgroundColorChange);
stopButton.addEventListener('click', stopBackgroundColorChange);

// Funkcja zwracająca losowy kolor w formacie heksadecymalnym
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
