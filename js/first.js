////////////////  1
var admin = "";
const name = "Джон";

admin = name;
console.log(admin);

////////////////  2.1
/*
var c = prompt("Ведите число меньше 10", "например, 3");
const ten = 10;

if (c <= ten) {
  alert("верно");
} else if (c > ten) {
  console.log("неверно");
} else {
  console.log("you are stupid");
}
*/

////////////////  2.2
/*
var message = "Сотрудник";
switch (message) {
  case "Сотрудник":
    console.log("Привет");
    break;
  case "Директор":
    console.log("Здравствуйте");
    break;
  case "":
    console.log("Нет логина");
    break;
  default:
    console.log("");
    break;
}
*/

//////////////// 2.3
/*
var age = prompt("Введите age", "например, между 14 и 90");
const fot = 14;
const nine = 90;

if ((age >= fot) & (age <= nine)) {
  console.log("age в диапазоне 14-90");
} else {
  console.log("age не в диапазоне 14-90");
}
*/

////////////////  2.4
/*
const number = +prompt("Введите число между 0 и 3", "");

switch (number) {
  case 0:
    alert("Вы ввели число 0");
    break;
  case 1:
    alert("Вы ввели число 1");
    break;
  case 2 || 3:
    alert("Вы ввели число 2, а может и 3");
    break;
  default:
    console.log("");
    break;
}
*/

////////////////  3.1
/*
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
*/

////////////////  3.2
/*Напишите цикл, который предлагает prompt ввести число, большее 100. 
Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее. 
Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, 
либо не нажмёт кнопку Отмена (ESC).Предполагается, что посетитель вводит только числа. 
Предусматривать обработку нечисловых строк в этой задаче необязательно.*/

var biggestNum = Number.MAX_SAFE_INTEGER;

/*
for (let p = 100; p <= 1000; p++) {
  var more100 = prompt("Ведите число большее 100", "");
  if (more100 < 100 && more100 > 1000) {
    console.log(more100);
  }
}
*/
