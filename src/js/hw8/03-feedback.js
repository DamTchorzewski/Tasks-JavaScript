
const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

// Funkcja zapisująca stan formularza w local storage
const saveFormStateToLocalStorage = _.throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
    console.log(localStorage);
}, 500);

// Funkcja odczytująca stan formularza z local storage
const loadFormStateFromLocalStorage = () => {
  const formStateJSON = localStorage.getItem('feedback-form-state');
    console.log(localStorage);
    if (formStateJSON) {
    const formState = JSON.parse(formStateJSON);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
};

// Funkcja czyszcząca stan formularza w local storage i pola formularza
const clearFormStateAndInputs = () => {
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
};

// Rejestrowanie zdarzenia "input" i zapisywanie stanu formularza w local storage
emailInput.addEventListener('input', saveFormStateToLocalStorage);
messageInput.addEventListener('input', saveFormStateToLocalStorage);

// Wczytanie stanu formularza z local storage podczas ładowania strony
loadFormStateFromLocalStorage();

// Czyszczenie stanu formularza i local storage po wysłaniu formularza
feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValue = emailInput.value;
  const messageValue = messageInput.value;
  console.log('Wartość pola email:', emailValue);
  console.log('Wartość pola message:', messageValue);
  const formState = {
    email: emailValue,
    message: messageValue,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
  clearFormStateAndInputs();
});