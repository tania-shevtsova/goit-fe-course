"use strict";

const countProps = function(obj) {
  const values = Object.keys(obj);
  let total = 0;

  for (let value in values) {
    total+=Number(value);
  }
  console.log(total);
};

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
