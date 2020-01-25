"use strict";

$(".parallax").parallax({ imageSrc: "..publicimages\fire.jpg" });

$(document).ready(function() {
  //E-mail Ajax Send
  $("form").submit(function() {
    //Change
    let th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});

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
//   num = prompt("Введите число юольше 100", 0);
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
// } else if (i % 3 == 0 && i % 5 == 0){
//   console.log("FizzBuzz");
// } else console.log(i);
// }

