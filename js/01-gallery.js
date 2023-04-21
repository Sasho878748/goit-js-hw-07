import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

// const img = document.querySelectorAll(".gallery__image");

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  
  const target = event.target;
  
  if (target.nodeName !== 'IMG') {
    return;
  }
  
  const largeImageUrl = target.dataset.source;
  
  openModal(largeImageUrl);
}

