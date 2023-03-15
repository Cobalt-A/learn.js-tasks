/*
    Изменяем "prototype"
    Задача 1
*/

// true, изменяет прототип только для новых обьектов
// false, изменяет свойства прототипа
// true, удалять у обьекта нечего, т.к. метод лежит в прототипе
// undefined, удалено из прототипа

/*
    Создайте новый объект с помощью уже существующего
    Задача 2
*/

function construct(name) {
    this.name = name;
}
// construct.prototype = {};

let obj = new construct("bruh");

let obj2 = new obj.constructor("no bruh");

console.log(obj2.name);
