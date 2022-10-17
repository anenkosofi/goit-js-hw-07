import { galleryItems } from './gallery-items.js';
// Change code below this line

// 1. Створення і рендер розмітки на підставі масиву 
// даних galleryItems і наданого шаблону елемента галереї.

/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */

const galleryRefs = document.querySelector('.gallery');
const galleryItemsRefs = galleryItemsMarkup(galleryItems);

galleryRefs.innerHTML = galleryItemsRefs;

// 2. Реалізація делегування на div.gallery і отримання url 
// великого зображення.

galleryRefs.addEventListener('click', onGalleryItemClick);

function galleryItemsMarkup(items) {
    return items.map(({original, preview, description} = item) =>
        `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>`
    ).join('');
}

// 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) 
// файли бібліотеки.

function onGalleryItemClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    } 

    const urlOfLargeImage = e.target.dataset.source;

// 4. Відкриття модального вікна по кліку на елементі галереї.Для цього ознайомся з 
// документацією і прикладами.
// 5. Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям. 
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки
// basicLightbox.
    
    const instance = basicLightbox.create(`
    <img src="${urlOfLargeImage}" width="800" height="600">
    `)

    instance.show()

    galleryRefs.addEventListener('keydown', e => {
        if (e.code === 'Escape') 
            instance.close()
        })

}






