/*
    Переведите текст вида border-left-width в borderLeftWidth
    Задача 1
*/

function camelize(str) {
    const array = str.split("-");

    const result = array.map((element, index) => {
        if (index == 0) return element;
        return element[0].toUpperCase() + element.slice(1);
    });

    return result.join("");
}

/*
    Фильтрация по диапазону
    Задача 2
*/

function filterRange(arr, a, b) {
    return arr.filter((item) => a <= item && item <= b);
}

/*
    Фильтрация по диапазону "на месте"
    Задача 3
*/

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        const value = array[i];
        if (value < a || value > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

/*
    Сортировать в порядке по убыванию
    Задача 4
*/

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log(arr);

/*
    Скопировать и отсортировать массив
    Задача 5
*/

function copySorted(arr) {
    return arr.slice().sort();
}

/*
    Создать расширяемый калькулятор
    Задача 6
*/

function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    };

    this.calculate = function (str) {
        let split = str.split(" "),
            a = +split[0],
            op = split[1],
            b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    };

    this.addMethod = function (name, func) {
        this.methods.name = func;
    };
}

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8

/*
    Трансформировать в массив имён
    Задача 7
*/

let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 28};

let users = [vasya, petya, masha];

let names = [];

for (const user of users) {
    names.push(user.name);
}

console.log(names); // Вася, Петя, Маша

/*
    Трансформировать в объекты
    Задача 8
*/

let vasya2 = {name: "Вася", surname: "Пупкин", id: 1};
let petya2 = {name: "Петя", surname: "Иванов", id: 2};
let masha2 = {name: "Маша", surname: "Петрова", id: 3};

let users2 = [vasya2, petya2, masha2];

let usersMapped = users2.map((item) => {
    return {id: item.id, fullName: `${item.name} ${item.surname}`};
});

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // Вася Пупкин

/*
    Отсортировать пользователей по возрасту
    Задача 9
*/

function sortByAge(arr) {
    arr.sort((a, b) => {
        a.age > b.age ? 1 : -1;
    });
}

let arr3 = [vasya, petya, masha];

sortByAge(arr3);

// теперь: [vasya, masha, petya]
console.log(arr3[0].name); // Вася
console.log(arr3[1].name); // Маша
console.log(arr3[2].name); // Петя

/*
    Перемешайте массив
    Задача 10
*/

function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
}

/*
    Получить средний возраст
    Задача 11
*/

function getAverageAge(arr) {
    const ages = arr.reduce((accumulator, item) => {
        return accumulator + item.age;
    }, 0);
    return ages / arr.length;
}

/*
    Оставить уникальные элементы массива
    Задача 12
*/

function unique(arr) {
    const result = arr.filter((item, index, thisArray) => {
        return thisArray.includes(item) && index === thisArray.indexOf(item);
    });
    return result;
}

/*
    Создайте объект с ключами из массива
    Задача 13
*/

function groupById(users) {
    const result = users.reduce((obj, item) => {
        obj[item.id] = item;
        return obj;
    }, {});

    return result;
}
