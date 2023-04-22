import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </li>
  `
    )
    .join("");
}

const galleryMarkup = createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryMarkup);

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  const clickedEl = e.target;

  if (clickedEl.tagName !== "IMG") {
    return;
  }

  const largeImageSrc = clickedEl.dataset.source;
  const instance = basicLightbox.create(`
      <img src="${largeImageSrc}" width="800" height="600">
    `);
  instance.show();

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && instance.visible()) {
      instance.close();
      document.body.classList.remove("is-open");
    }
  });
});
