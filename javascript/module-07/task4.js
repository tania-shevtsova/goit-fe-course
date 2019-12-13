let counterValue = { value: 0 };

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

const text = document.querySelector("#value");

decrementButton.addEventListener(
  "click",
  decrementBtn.bind(text, counterValue)
);
incrementButton.addEventListener(
  "click",
  incrementBtn.bind(text, counterValue)
);

function decrementBtn(counterValue, e) {
  const element = e.currentTarget;

  counterValue.value--;

  this.textContent = counterValue.value;
}

function incrementBtn(counterValue, e) {
  const element = e.currentTarget;

  counterValue.value++;
  this.textContent = counterValue.value;
}
