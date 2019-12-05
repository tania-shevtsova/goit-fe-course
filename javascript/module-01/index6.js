export function task6() {
  let input = null;
  let total = 0;

  do {
    input = prompt("Enter a number:");
    let numberInput = Number(input);

    if (isNaN(numberInput)) {
      console.log("Error! Enter a number");
    } else {
      total += numberInput;
    }
  } while (input !== null);

  console.log(`Общая сумма чисел равна ${total}`);
}
