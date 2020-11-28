const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const login = prompt("Пожалуйста, введите пароль");

if (login === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else if (login === null) {
  message = "Отменено пользователем!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);
