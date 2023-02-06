import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryDiv = document.querySelector('.gallery');

const linkArr = [];

galleryItems.forEach((item) => {
    const link = `<a class="gallery__link" href="${item.original}"><img class="gallery__image" 
    src="${item.preview} 
    "data-source="${item.original} 
    "alt="${item.description}"></a>`
    linkArr.push(link);
});

galleryDiv.insertAdjacentHTML('beforeEnd', linkArr.join(''));

galleryDiv.addEventListener("click", openImg);


function openImg(event) {
    event.preventDefault();
    const imgSrc = event.target.dataset.source;
   
    if (event.target.nodeName !== "IMG") {
        return
    }
    const instance = basicLightbox.create(
        `<img src= ${imgSrc} width="800" height="600">`)
    instance.show()

    galleryDiv.addEventListener("keydown", closeImg);
 
    function closeImg(e) {
        if (e.key === "Escape") {
            instance.close()
        };
    };
}

