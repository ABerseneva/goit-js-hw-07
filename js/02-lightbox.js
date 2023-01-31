import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryDiv = document.querySelector('.gallery');

function createGalaryMarkup(arr) {
    return arr.map((item) => `<a class="gallery__item" href="${item.original}"><img class="gallery__image" 
    src="${item.preview} 
    "alt="${item.description}"></a>`).join('')
}

galleryDiv.insertAdjacentHTML('beforeEnd', createGalaryMarkup(galleryItems));

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});


console.log(galleryItems);


