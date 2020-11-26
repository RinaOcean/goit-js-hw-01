"use strict";

const total = 100;
const ordered = 50;
/*let message;

if (ordered > total) {
  message = "На складе недостаточно товаров!";
} else {
  message = "Заказ оформлен, с вами свяжется менеджер";
}*/

const message = total > ordered ? "Заказ оформлен, с вами свяжется менеджер" : "На складе недостаточно товаров!";

console.log(message);
