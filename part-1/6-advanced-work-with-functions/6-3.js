/*
    Независимы ли счётчики?
    Задача 1
*/

// Да независимы

/*
    Объект счётчика
    Задача 2
*/

// Да, будет работать

/*
    Функция в if
    Задача 3
*/

// Функция вне зоны видимости, ошибка

/*
    Сумма с помощью замыканий
    Задача 4
*/

function sum(a) {
    return function (b) {
        return a + b;
    };
}

console.log(sum(1)(2));

/*
    Фильтрация с помощью функции
    Задача 5
*/

function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    };
}

function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    };
}

/*
    Сортировать по полю
    Задача 6
*/

let users = [
    {name: "John", age: 20, surname: "Johnson"},
    {name: "Pete", age: 18, surname: "Peterson"},
    {name: "Ann", age: 19, surname: "Hathaway"},
];

function byField(field) {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
}

console.log(users.sort(byField("name")));
console.log(users.sort(byField("age")));

/*
    Армия функций
    Задача 7
*/

// в каждый элемент передается function () { alert(i); }
// но т.к. переменная i для каждого элемента задана глобально, то они все будут выводить одно число

function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function () {
            alert(i);
        };
        shooters.push(shooter);
    }
    return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5
