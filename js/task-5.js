let cost = 0;
let destination = prompt("Введите страну доставки");

if (destination === null) {
  console.log("Отмененно пользователем");
}

//let country = destination.toLowerCase();

let country = destination[0].toUpperCase() + destination.slice(1, 9).toLowerCase();

switch (country) {
  case "":
    alert("Ошибка! Ничего не введено!");
    break;

  case "Китай":
    cost = 100;
    break;

  case "Чили":
    cost = 250;
    break;

  case "Австралия":
    cost = 170;
    country = country.slice(0, 8) + "ю";
    break;

  case "Индия":
    cost = 80;
    country = country.slice(0, 4) + "ю";
    break;

  case "Ямайка":
    cost = 120;
    country = country.slice(0, 5) + "у";
    message = `Доставка на ${country} будет стоить ${cost} кредитов`;
    break;

  default:
    alert("В вашей стране доставка не доступна");
}

console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
