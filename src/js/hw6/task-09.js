// Napisz skrypt, który zmienia kolor tła elementu <body> poprzez style inline po kliknięciu na button.change-color i wprowadza wartość koloru do span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector('.change-color');
    const colorSpan = document.querySelector('.color');

    button.addEventListener('click', () => {
      const newColor = getRandomHexColor();
      document.body.style.backgroundColor = newColor;
      colorSpan.textContent = newColor;
    });

    // Skrypt pobiera referencje do przycisku i elementu span, a następnie dodaje do przycisku nasłuchiwacz zdarzeń na kliknięcie. Po kliknięciu generowany jest losowy kolor przy pomocy funkcji getRandomHexColor(), ustawiany jako kolor tła elementu <body> i wyświetlany w elemencie span.