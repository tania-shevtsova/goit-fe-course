export function task3() {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  const inputMessage = prompt("Please, enter your password:");

  if (inputMessage === null) {
    message = "Отменено пользователем!";
  } else if (inputMessage === ADMIN_PASSWORD) {
    message = "Добро пожаловать!";
  } else {
    message = "Доступ запрещен, неверный пароль!";
  }

  alert(message);
}
