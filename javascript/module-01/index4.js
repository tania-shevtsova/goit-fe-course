'use strict';

const credits = 23580;
const pricePerDroid=3000;
const inputMessage=prompt("Какое количество дроидов Вы хотели бы купить?");
let totalPrice=inputMessage*pricePerDroid;
let creditsLeft=credits-totalPrice;

if(inputMessage===null) {
    console.log('Отменено пользователем!');
}

else if (totalPrice>=credits){
    console.log('Недостаточно средств на счету!');
}

else {
    console.log(`Вы купили ${inputMessage} дроидов, на счету осталось ${creditsLeft} кредитов.`);
}