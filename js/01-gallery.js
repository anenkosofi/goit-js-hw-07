import { galleryItems } from './gallery-items.js';

const galleryRefs = document.querySelector('.gallery');
const galleryItemsRefs = galleryItemsMarkup(galleryItems);

galleryRefs.innerHTML = galleryItemsRefs;
galleryRefs.addEventListener('click', onGalleryItemClick);

function galleryItemsMarkup(items) {
  return items
    .map(
      ({ original, preview, description } = item) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image"src="${preview}"data-source="${original}"alt="${description}"/> 
  </a>
  </div>`
    )
    .join('');
}

function onGalleryItemClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const urlOfLargeImage = e.target.dataset.source;

  const instance = basicLightbox.create(
    `
<img src="${urlOfLargeImage}" width="800" height="600">
          `,
    {
      onShow: instance => {
        document.addEventListener('keydown', onModalClose);
      },
      onClose: instance => {
        document.removeEventListener('keydown', onModalClose);
      },
    }
  );
  function onModalClose(e) {
    if (e.code === 'Escape') instance.close();
  }
  instance.show();
}
