import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


// Создай галерею с возможностью клика по её элементам и просмотра полноразмерного 
// изображения в модальном окне.Посмотри демо видео работы галереи.

// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// 1 Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// 2 Реализация делегирования на div.gallery и получение url большого изображения.
// 3 Подключение скрипта и стилей библиотеки модального окна basicLightbox.Используй CDN сервис jsdelivr и 
// добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// 4 Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// 5 Замена значения атрибута src элемента < img > в модальном окне перед открытием.Используй готовую разметку 
// модального окна с изображением из примеров библиотеки basicLightbox.

const galleryContainer = document.querySelector('.gallery');
const cardsGalleryMarkup = createcardsGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsGalleryMarkup)
galleryContainer.addEventListener('click', onCardsGalleryMarkupClick)

function createcardsGalleryMarkup(galleryItems) {
      return galleryItems
            .map(({ description, original, preview }) => {
                  return `<div class="gallery__item">
                        <a class = "gallery__link" href = "${original}">
                              <img
                              class = "gallery__image"
                              src="${preview}" 
                              data-source="${original}" 
                              alt="${description}"/>
                        </a>
                        </div>`
            }).join('');
};

function onCardsGalleryMarkupClick(evt) {
      evt.preventDefault();

      const isCardsGallery = evt.target.classList.contains('gallery__image');
      
      if (!isCardsGallery) {
            return;
      }

      const urlChoiceCardImage = evt.target.dataset.source;

      const instance = basicLightbox.create(
            `<img class="modal-img" src="urlChoiceCardImage">`, {
            
      onShow: (instance) => {
            instance.element().querySelector('img').src = evt.target.dataset.source;
      },

      });
      console.log(instance)

instance.show();
}
