import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      window.alert("Please choose a date in the future");
    } else {
      const startBtn = document.querySelector("#start-btn");
      startBtn.removeAttribute("disabled");
      startBtn.addEventListener("click", () => {
        startCountdown(selectedDate);
        startBtn.setAttribute("disabled", true);
      });
    }
  },
};

flatpickr("#datetime-picker", options);

function startCountdown(endDate) {
  const daysElem = document.querySelector("[data-days]");
  const hoursElem = document.querySelector("[data-hours]");
  const minutesElem = document.querySelector("[data-minutes]");
  const secondsElem = document.querySelector("[data-seconds]");

  const updateTimer = () => {
    const timeLeft = endDate - new Date();
    if (timeLeft <= 0) {
      clearInterval(updateTimer);
      daysElem.textContent = "00";
      hoursElem.textContent = "00";
      minutesElem.textContent = "00";
      secondsElem.textContent = "00";
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeLeft);

    daysElem.textContent = formatNumber(days);
    hoursElem.textContent = formatNumber(hours);
    minutesElem.textContent = formatNumber(minutes);
    secondsElem.textContent = formatNumber(seconds);

    setTimeout(updateTimer, 1000);
  };

  updateTimer();
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
}

function formatNumber(number) {
  return number.toString().padStart(2, "0");
}
