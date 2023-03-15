import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const result = galleryItems.reduce((acc, item) => {
  const { preview, description, original } = item;
  return (
    acc +
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  );
}, ``);

galleryEl.insertAdjacentHTML("afterbegin", result);

let gallery = new SimpleLightbox(".gallery");
