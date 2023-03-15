import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);
/*
  |============================
  | First step (creating imgGallery)
  |============================
*/
const galleryEl = document.querySelector(".gallery");

const result = galleryItems.reduce((acc, item) => {
  const { preview, description, original } = item;
  return (
    acc +
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  );
}, ``);

galleryEl.insertAdjacentHTML("afterbegin", result);
/*
  |============================
  | Second step (addeventlistener)
  |============================
*/

galleryEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;
  console.dir(e.target);
  const instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}" width="800" height="600">
  `);

  instance.show();
  if (basicLightbox.visible()) {
    document.addEventListener("keydown", (e) => {
      if (e.code !== "Escape") return;
      console.log(e);
      instance.close();
    });
  }
});
/*
  |============================
  | Third step (close on Esc)
  |============================
*/
// function escapeCheck(e) {
//   if (e.code !== "Escape") return;
//   console.log(e);
//   instance.close();
// }
// const clbFunc = (e) => {
//   escapeCheck(e);
// };
