import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsGalleryMarkup = createcardsGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsGalleryMarkup)

function createcardsGalleryMarkup(galleryItems) {
      return galleryItems
            .map(({ description, original, preview }) => {
                  return `<li>
                              <a class="gallery__item" href="${original}">
                              <img class="gallery__image" src="${preview}" alt="${description}" />
                              </a>
                        </li>`
            }).join('');
};

let gallery = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionPosition: 'bottom', 
      captionDelay:250,
      enableKeyboard: true,
      
});;