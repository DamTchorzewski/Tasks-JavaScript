// Napisz skrypt, który przy utracie fokusu na polu input (zdarzenie blur) sprawdza jego zawartość na prawidłową liczbę wprowadzonych symboli.
// Informacja o liczbie symboli, która powinna znajdować się w polu input, pokazuje się w jego atrybucie data-length.
// Jeśli wprowadzono odpowiednią liczbę symboli, to border pola input staje się zielone, a jeśli liczba jest nieprawidłowa - czerwone.

// Pobieramy element DOM dla pola tekstowego, na którym chcemy działać
const validationInput = document.getElementById('validation-input');
// Dodajemy nasłuchiwanie zdarzenia 'blur' dla pola tekstowego
validationInput.addEventListener('blur', () => {
 // Pobieramy wartość atrybutu 'data-length' dla pola tekstowego  
   
    const length = validationInput.getAttribute('data-length');
  // Sprawdzamy, czy długość wprowadzonej wartości jest zgodna z wymaganą długością
    
    if (validationInput.value.length === parseInt(length)) {
    validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
        
        // Sprawdzamy, czy długość wprowadzonej wartości jest zgodna z wymaganą długością
    } else {
        // Jeśli nie, usuwamy klasę 'valid' i dodajemy klasę 'invalid'
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});