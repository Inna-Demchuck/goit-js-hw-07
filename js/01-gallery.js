import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector('.gallery');

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item"><a class="gallery__link href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`;
    }).join('');
};

galleryList.insertAdjacentHTML('beforeend', createGallery(galleryItems));

galleryList.addEventListener('click', onClickGallery);

function onClickGallery(e) {
    e.preventDefault();
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }

    const instance = basicLightbox.create(`<img src = "${e.target.dataset.source}">`);

    instance.show(() => window.addEventListener('keydown', onKeyPress));


    function onKeyPress(e) {
        if (e.key === 'Escape') {
            instance.close(() => window.removeEventListener('keydown', onKeyPress));
            return;
        }

    };
};