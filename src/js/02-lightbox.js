import { galleryItems } from './gallery-items.js';
// Change code below this line
const { gallery } = {
  gallery: document.body.querySelector(".gallery"),
};

const markup = galleryItems.map((item) => {
  return `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="test" />
</a>`;
});

gallery.insertAdjacentHTML("beforeend", markup.join(""));

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});