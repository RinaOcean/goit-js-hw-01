let total = 0;

while (true) {
  let input = prompt("Введите число:");

  if (input === null) {
    break;
  }

  input = Number(input);

  const notANumber = Number.isNaN(input);
  if (notANumber) {
    alert("Вы ввели не число, попробуёте ещё!");
    continue;
  }
  total += input;
}

alert(`Общая сумма: ${total}`);
