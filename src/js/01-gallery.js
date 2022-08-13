import { galleryItems } from "./gallery-items.js";

const { gallery } = {
  gallery: document.body.querySelector(".gallery"),
};

const markup = galleryItems.map((item) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}" onclick="event.preventDefault()">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
});

gallery.insertAdjacentHTML("beforeend", markup.join(""));

gallery.addEventListener("click", () => {
  const instance = basicLightbox.create(
    `
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`
  );
  instance.show();

  if (basicLightbox.visible()) {
    document.addEventListener("keydown", () => {
      if (event.key === "Escape") {
        instance.close();
      }
    });
  }
});