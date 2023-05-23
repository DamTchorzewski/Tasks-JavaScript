// Inicjalizacja odtwarzacza Vimeo
import throttle from 'lodash.throttle';
const player = new Vimeo.Player('vimeo-player');

// Funkcja do aktualizacji czasu odtwarzania
const updateCurrentTime = throttle(function() {
  player.getCurrentTime().then(function(seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
}, 1000);

// Obsługa zdarzenia timeupdate
player.on('timeupdate', updateCurrentTime);

const savedTime = localStorage.getItem('videoplayer-current-time');

// Ustawiamy czas odtwarzania na zapisany lub 0
player.setCurrentTime(savedTime || 0);