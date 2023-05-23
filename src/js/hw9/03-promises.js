import Notiflix from 'notiflix';
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const delay = parseInt(form.delay.value);
  const step = parseInt(form.step.value);
  const amount = parseInt(form.amount.value);

  createPromises(delay, step, amount);
});

function createPromises(delay, step, amount) {
  let currentDelay = delay;

  for (let i = 0; i < amount; i++) {
    const position = i + 1;
//RUN  Notiflix.Notify instead of this CONSOL.LOG.
    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(` Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(` Rejected promise ${position} in ${delay}ms`);
      });

    currentDelay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
