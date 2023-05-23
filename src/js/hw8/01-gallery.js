import SimpleLightbox from "simplelightbox"
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.href = original;
  link.classList.add('gallery__link');

  const image = document.createElement('img');
  image.src = preview;
  image.alt = description;
  image.dataset.source = original;
  image.classList.add('gallery__image');

  link.appendChild(image);

  galleryItem.appendChild(link);

  return galleryItem;
};

const renderGallery = () => {
  const items = galleryItems.map(createGalleryItem);
  gallery.append(...items);
};

renderGallery();

gallery.addEventListener('click', (event) => {
  event.preventDefault();

  const target = event.target;

  if (target.nodeName !== 'IMG') {
    return;
  }

  const original = target.dataset.source;

  const instance = new SimpleLightbox('.gallery a', {
    sourceAttr: 'href',
    captionsData: 'alt',
    captionDelay: 250,
    closeText: '×',
    navText: ['&larr;', '&rarr;'],
  });

  instance.open({ source: original });
});

console.log(galleryItems);