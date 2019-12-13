const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", handleInputChange.bind(output));
function handleInputChange(e) {
  const inp = e.currentTarget;
  this.textContent = inp.value !== "" ? inp.value : "незнакомец";
}
