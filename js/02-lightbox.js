import { galleryItems } from './gallery-items.js';

const galleryRefs = document.querySelector('.gallery');
const galleryItemsRefs = galleryItemsMarkup(galleryItems);

galleryRefs.innerHTML = galleryItemsRefs;

function galleryItemsMarkup(items) {
  return items
    .map(
      ({ original, preview, description } = item) =>
        `<a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}" 
            alt="${description}" />
        </a> `
    )
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
