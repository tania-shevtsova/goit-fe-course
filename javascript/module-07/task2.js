const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const add = function(arr) {
  arr.forEach(elem => {
    const list = document.querySelector("ul#ingredients");
    const item = document.createElement("li");
    list.appendChild(item);
    item.innerHTML = elem;
  });
};

add(ingredients);
