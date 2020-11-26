"use strict";

const count = prompt("Сколько дроидов Вы хотите приобрести?");
const pricePerDroid = 3000;
let totalPrice = pricePerDroid * count;
let credits = 23580;

let message;

if (count === null) {
  message = "Отменено пользователем!";
} else if (totalPrice > credits) {
  message = "Недостаточно средств на счету!";
} else {
  credits -= totalPrice;
  message = `Вы купили ${count} дроидов, на счету осталось ${credits} кредитов.`;
}

console.log(message);
