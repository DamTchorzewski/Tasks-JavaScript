// Napisz skrypt zarządzania formularzem logowania.
// // Opracowanie przesyłania formularza form.login-form powinno przebiegać zgodnie ze zdarzeniem submit.
// Podczas przesyłania formularza strona nie powinna się restartować.
// Jeśli w formularzu są nieuzupełnione pola, wprowadź alert z upomnieniem o tym, że wszystkie pola powinny zostać wypełnione.
// Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz, zbierz wartość pól jako obiekt, gdzie nazwa pola będzie nazwą właściwości, a wartość pola - wartością właściwości. Aby otrzymać dostęp do elementów formularza użyj właściwości elements.
// Umieść obiekt z wprowadzonymi danymi do wiersza poleceń i wyczyść wartości pól formularza metodą reset
const loginForm = document.querySelector('form.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // unikaj przeladowania strony

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Wszystkie pola powinny być wypełnione!');
    return;
  }

  const loginData = {
    email: emailInput.value,
    password: passwordInput.value
  };

  console.log(loginData);

  loginForm.reset();
});