import arr from "./gallery-items.js";

const refs = {
  ul: document.querySelector(".js-gallery"),
  div: document.querySelector("div.lightbox"),
  img: document.querySelector("div.lightbox__content > .lightbox__image"),
  content: document.querySelector(".lightbox__content"),
  overlay: document.querySelector(".lightbox__overlay"),
  closeBtn: document.querySelector('button[data-action="close-lightbox"]')
};

refs.content.addEventListener("click", handleRefs);
refs.overlay.addEventListener("click", handleRefs);
refs.ul.addEventListener("click", handleListClick);
refs.closeBtn.addEventListener("click", handleListClose);
document.addEventListener("keydown", handleKeyPress);


const create = function(arr) {
  const string = arr.reduce((acc, element) => {
    return (acc += `<li><a class="gallery__link" href=${element.original}><img class="gallery__image" src=${element.preview} data-source=${element.original} alt=${element.description}></li>`);
  }, "");
  refs.ul.insertAdjacentHTML("afterbegin", string);
};

create(arr);

function handleListClick(e) {
  e.preventDefault();
  refs.div.classList.add("is-open");
  refs.img.src = e.target.dataset.source;
  window.addEventListener("keydown", handleKeyPress);
}


function handleListClose(e) {
  refs.div.classList.remove("is-open");
  window.removeEventListener("keydown", handleKeyPress);
  refs.img.src = "";
}

function handleRefs(e) {
  if (e.target !== e.currentTarget) {
    return;
  }

  handleListClose();
}

function handleKeyPress(e) {
  if (e.code === "Escape") {
    const divKey = document.querySelector("div.lightbox");
    divKey.classList.remove("is-open");
    return;
  } else if (e.code === "ArrowLeft") {
    function left() {
      let imagesLeft = document.querySelector(".lightbox__image");
      let src = "";
      arr.find((elem, i, arr) => {
        src = i > 0 ? arr[i - 1].original : arr[arr.length - 1].original;
        return elem.original == imagesLeft.src;
      });
      return (imagesLeft.src = src);
    }
    left();
    return;
  }

  if (e.code === "ArrowRight") {
    function right() {
      let imagesRight = document.querySelector(".lightbox__image");
      let src = "";
      arr.find((elem, i, arr) => {
        src = i < arr.length - 1 ? arr[i + 1].original : arr[0].original;
        return elem.original == imagesRight.src;
      });
      return (imagesRight.src = src);
    }
    right();
    return;
  }
  event.preventDefault();
}
