///Plik index.js to plik skryptu przeglądarki internetowej,
///który odpowiada za obsługę interakcji użytkownika z 
///aplikacją internetową.Skrypt ten importuje biblioteki Notiflix,
///fetchImages oraz SimpleLightbox, a n
///astępnie wykorzystuje je do pobierania i wyświetlania
/// obrazów z serwisu Pixabay.

import Notiflix from 'notiflix';
import fetchImages from './fetchImages';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
//importuje trzy moduły: Notiflix, fetchImages oraz SimpleLightbox. 
///Notiflix to biblioteka do wyświetlania powiadomień, fetchImages to funkcja do 
///pobierania zdjęć z serwisu Pixabay, a SimpleLightbox to biblioteka umożliwiająca
/// wyświetlanie zdjęć w większym rozmiarze po kliknięciu na miniaturkę.

const input = document.querySelector('.search-bar-input');
const searchBtn = document.querySelector('.search-bar-btn');
const gallery = document.querySelector('.gallery');
const LoadMoreBtn = document.querySelector('.load-more-btn');
let page = 1;
let gallerySimpleLightbox = new SimpleLightbox('.gallery a');

LoadMoreBtn.style.display = 'none';

///searchBtn.addEventListener - nasłuchiwacz zdarzeń reagujący na kliknięcie przycisku wyszukiwania.
///Gdy zostanie wykryte kliknięcie, skrypt wyczyści galerię, pobierze wartość z pola 
///wyszukiwania i wywoła funkcję fetchImages, aby pobrać obrazy z serwisu Pixabay.
  ///Następnie, w zależności od wyniku wyszukiwania,
  ///skrypt wyświetli odpowiednie powiadomienia i załadowane obrazy,
  ///a także włączy przycisk LoadMoreBtn i odświeży galerię gallerySimpleLightbox.
searchBtn.addEventListener('click', e => {
  e.preventDefault();
  cleanGallery();
  const trimmed = input.value.trim();
  if (trimmed !== '') {
    fetchImages(trimmed, page).then(foundData => {
      if (foundData.hits.length === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else {
        ///renderImageList - funkcja renderująca listę obrazów
        /// w formacie HTML na podstawie listy obiektów zdjęć
        renderImageList(foundData.hits);
        Notiflix.Notify.success(
          `Hooray! We found ${foundData.totalHits} images.`
        );
        LoadMoreBtn.style.display = 'block';
        gallerySimpleLightbox.refresh();
      }
    });
  }
});

function renderImageList(images) {
  const markup = images
    .map(image => {
      return `
        <div class="photo-card">
                 <a href="${image.largeImageURL}"><img class="photo" src="${image.webformatURL}" alt="${image.tags}" title="${image.tags}" loading="lazy"/></a>
            <div class="info">
                 <p class="info-item"><b>Likes</b><span class="info-item-data">${image.likes}</span></p>
                 <p class="info-item"><b>Views</b> <span class="info-item-data">${image.views}</span></p>
                 <p class="info-item"><b>Comments</b> <span class="info-item-data">${image.comments}</span></p>
                 <p class="info-item"><b>Downloads</b> <span class="info-item-data">${image.downloads}</span></p>
            </div>
        </div>`;
    })
    .join('');
  gallery.innerHTML += markup;
}

///LoadMoreBtn.addEventListener - nasłuchiwacz zdarzeń reagujący na kliknięcie przycisku ładowania kolejnych wyników wyszukiwania.
///Gdy zostanie wykryte kliknięcie, skrypt zwiększy
 ///wartość zmiennej page o 1, pobierze wartość z pola wyszukiwania i wywoła
 ///funkcję fetchImages, aby pobrać kolejne obrazy z serwisu Pixabay.Następnie
 ///skrypt wyświetli pobrane obrazy w galerii i włączy przycisk LoadMoreBtn.

LoadMoreBtn.addEventListener('click', () => {
  page++;
  const trimmed = input.value.trim();
  LoadMoreBtn.style.display = 'none';
  fetchImages(trimmed, page).then(foundData => {
    if (foundData.hits.length === 0) {
      Notiflix.Notify.failure(
        "We're sorry, but you've reached the end of search results."
      );
    } else {
      renderImageList(foundData.hits);
      LoadMoreBtn.style.display = 'block';
    }
  });
});
///cleanGallery - funkcja usuwająca zawartość 
///galerii i przywracająca ustawienia początkowe
function cleanGallery() {
  gallery.innerHTML = '';
  page = 1;
  LoadMoreBtn.style.display = 'none';
}