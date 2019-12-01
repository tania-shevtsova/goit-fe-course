"use strict";

const calculateEngravingPrice = function(message, pricePerWord) {
  let words = message.split(" ");
  let totalPrice = 0;
  for (const word of words) {
    totalPrice += pricePerWord;
  }
  return totalPrice;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
);

console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 40));

console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 20));
