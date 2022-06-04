'use strict';

// Task 1

// const name = 'Генератор захисного поля';
// let price = 1000;

// console.log(`Обрано "${name}", ціна за штуку ${price} кредитів`);

// price = 2000;

// console.log(`Обрано "${name}", ціна за штуку ${price} кредитів`);


// Task 2

// const total = 100;
// const ordered = 50;

// if (total < ordered) {
//     alert('На складі недостатньо товарів!');
// } else {
//     alert("Замовлення оформлено, з вами зв'яжеться наш менеджер!");
// }


// Task 3

// const ADMIN_PASSWORD = 'adminpassword';
// let password = prompt('Введіть пароль користувача:');
// let message;

// if (password) {
//     message = 'Скасовано користувачем!';
// } else if (password === ADMIN_PASSWORD) {
//     message = 'Ласкаво просимо!';
// } else {
//     message = "Доступ заборонений, невірний пароль!";
// };

// alert(message);


// Task 4

// let credit = 23590;
// const pricePerDroid = 3000;
// const order = +prompt("Яку кількість дроїдів яку ви хочете придбати:");
// let totalPrice;

// if (order) {
//     console.log("Скасовано користувачем");
// } else {
//     totalPrice = pricePerDroid * order;
//     if (credit >= totalPrice) {
//         console.log(`Ви купили ${order} дроїдів, на рахунку залишилося ${credit - totalPrice} кредитів.`)
//     } else {
//         console.log("Недостатньо коштів на вашому рахунку!");
//     }
// }


// Task 5

// const country = prompt('Введіть вашу країну').toLowerCase();
// let price;

// switch (country) {
//     case 'китай':
//         price = 100;
//         alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
//         break;
//     case 'чилі':
//         price = 250;
//         alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
//         break;
//     case 'австралія':
//         price = 170;
//         alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
//         break;
//     case 'індія':
//         price = 80;
//         alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
//         break;
//     case 'ямайка':
//         price = 120;
//         alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
//         break;
//     default:
//         alert('У вашій країні доставка недоступна');
//         break;
// }



// Task 6

let total = 0;
let input;

do {
  input = prompt('Введіть число');
  if (isNaN(input)) {
    alert('Було написано не число, повторіть спробу');
    continue;
  }

  total += Number(input);
} while(input !== null);

alert(total);