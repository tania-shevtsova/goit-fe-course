const list = Array.from(document.querySelector("ul#categories").children);
console.log(`В списке ${list.length} категории!`);

list.forEach(elem => {
  const title = elem.querySelector("h2");
  const child = elem.querySelector("ul").children.length;

  console.log(`Категория: ${title.innerText}`);
  console.log(`Количество элементов: ${child}`);
});
