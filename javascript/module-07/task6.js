const input = document.querySelector("#validation-input");
const len = input.dataset.length;

input.addEventListener("blur", handleInputChange);

function handleInputChange(e) {
  const inp = e.currentTarget;

  if (inp.value.length == len) {
    inp.style.borderColor = document.getElementById(
      "validation-input"
    ).className = "valid";
  } else {
    inp.style.borderColor = document.getElementById(
      "validation-input"
    ).className = "invalid";
  }
}
