const div = document.querySelector("#boxes");
const button = document.querySelector("button");

const renderCreate = document.querySelector('button[data-action="render"]');
const renderDestroy = document.querySelector('button[data-action="destroy"]');

renderCreate.addEventListener("click", onRenderCreanteHandler);
renderDestroy.addEventListener("click", destroyBoxes);

// let arr=[]
function onRenderCreanteHandler(e) {
  let inp = document.querySelector("input");
  createBoxes(inp.value);
}

function createBoxes(amount) {
  const startSize = 30;

  for (let i = 0; i < amount; i++) {
    let elemDiv = document.createElement("div");
    div.appendChild(elemDiv);

    let addSize = i * 10;

    elemDiv.style.backgroundColor = random_bg_color();
    elemDiv.style.width = startSize + addSize + "px";
    elemDiv.style.height = startSize + addSize + "px";
  }
}

function random_bg_color() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";

  return bgColor;
}

function destroyBoxes(e) {
  let inp=e.currentTarget;
  let mainContainer = document.querySelector("#boxes");
  mainContainer.innerHTML = "";
}
