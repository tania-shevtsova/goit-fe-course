const elem = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
elem.addEventListener("input", oninput.bind(text));

function oninput(e) {
  let inp = e.currentTarget;
  this.style.fontSize = inp.value + "px";
}
