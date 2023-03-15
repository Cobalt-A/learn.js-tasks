/*
    Работа с прототипами
    Задача 1
*/

let animal = {
    jumps: null,
};
let rabbit = {
    __proto__: animal,
    jumps: true,
};

console.log(rabbit.jumps); // true

delete rabbit.jumps;

console.log(rabbit.jumps); // null

delete animal.jumps;

console.log(rabbit.jumps); // undefined

/*
    Алгоритм поиска
    Задача 2
*/

let head = {
    glasses: 1,
};

let table = {
    pen: 3,
    __proto__: head,
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
};

let pockets = {
    money: 2000,
    __proto__: bed,
};

console.log(pockets.pen); // 3
console.log(bed.glasses); // 1
console.log(table.money); // undefined

/*
    Куда будет произведена запись?
    Задача 3
*/

// свойство запишется в обьект rabit, т.к. у rabit идет вызов метода.

/*
    Почему наедаются оба хомяка?
    Задача 4
*/

// оба обьекта наследуют один и тот же прототип, при изменении свойства stomatch изменяется он у обоих прототипов
