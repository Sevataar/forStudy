"use strict";

// alert("Не лезь! Оно тебя сжрёт!");

// const myBirthday = "29.06.1999";

// alert(`Привет, ${user}!`);
// alert(`результат: ${1 + 2}`);
// результат: 3;

// let nameFieldChecked = true;
// let ageFieldChecked = false;

// let isGreater = 5 > 2;
// console.log(isGreater);

// let apple = prompt("Ввести яблоки", "");
// apple = apple % 1000;
// if (apple == 1) {
//   alert(`1 яблоко`);
// } else if (2 <= apple <= 4) {
//   alert(`${apple} яблока`);
// } else if (11 <= apple <= 19) {
//   alert(`${apple} яблок`);
// }

// let i = 0;
// while (0 < 3) {
//   console.log(i);
//   i++;
// }

// let a = 0;
// do {
//   console.log(a);
//   a++;
// } while (a < 3);

// let num;
// do {
//   num = prompt("Введите число больше 100", 0);
// } while (num <= 100 && num);

// for (i = 0; i < 10; i++) {
//   if (i % 2 == 0);
//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) continue;
//   alert(i);
// }

// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Значение на координатах (${i}, ${j})`, "");
//     if (!input) break outer;
//   }
// }
// alert("Готово");

// let n = 10;
// nextPrime: for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue nextPrime;
//   }
//   alert(i);
// }

// for (let i = 1; i <= 15; i++){
//   if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0){
//     console.log("Buzz");
//   } else if (i % 3 == 0 && i % 5 == 0){
//   console.log("FizzBuzz");
//   } else console.log(i);
// }

// let sum = prompt("2 + 2 ?", "");
// switch (+sum) {
//   case 3:
//     alert("Malo");
//     break;
//   case 4:
//     alert("V tochku");
//     break;
//   case 5:
//     alert("Mnogo");
//     break;
//   default:
//     alert("net takih znachenii");
//     break;
// }

// let sum = +prompt("2 + 2 ?", "");
// switch (sum) {
//   case 4:
//     alert("V tochku");
//     break;
//   case 3:
//   case 5:
//     alert("neverno");
//     break;
//   default:
//     alert("net takih znachenii");
//     break;
// }

// function showMessage() {
//     alert("Message");
// }

// function showMessage() {
//     let message = "Message";
//     alert(message);
// }

// let userName = "User";
// function showMessage() {
//   let message = "Hello, " + userName;
//   alert(message);
// }

// function showMessage(from, text) {
//   alert(from + ": " + text);
// }
// showMessage("User", " hello");

// function showMessage(from, text) {
//     from = '*' + from + '*';
//     alert( from + ': ' + text );
// }

// let n = +prompt("Введите n");
// function showPrimes(n) {
//   for (let i = 0; i < n; i++) {
//     if (!isPrime(i)) continue;
//     console.log(i);
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }
// showPrimes(n);

// function ask(qestion, yes, no) {
//   if (confirm(qestion)) {
//     yes();
//   } else {
//     no();
//   }
// }
// function showOk() {
//   alert("Вы согласны");
// }
// function showCancel() {
//   alert("Вы отменили выполнение.");
// }

// ask("Вы согласны?", showOk, showCancel);

// let sum = (a, b) => {
//   let result = a + b;
//   return result;
// };

// alert(sum(2, 3));

// let user = {
//   name: "Jhon",
//   age: 30
// };

// let key = prompt("Что вы хотите узнать о пользователе?", "name");
// alert(user[key]);
// alert("name" in user);

// let fruit = prompt("Какой фрукт купить?", "");
// let number = prompt("Сколько фруктов купить?", "");

// let bag = {
//   [fruit]: number
// };

// alert( bag[fruit] );

