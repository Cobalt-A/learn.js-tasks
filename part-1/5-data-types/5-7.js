/*
    Фильтрация уникальных элементов массива
    Задача 1
*/

function unique(arr) {
    const result = Array.from(new Set(arr));
    return result;
}

/*
    Отфильтруйте анаграммы
    Задача 2
*/

function aclean(arr) {
    const map = new Map();
    for (let word of arr) {
        const sorted = word
        .toLowerCase()
        .split("")
        .sort()
        .join("");
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

/*
    Перебираемые ключи
    Задача 3
*/

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

console.log(keys);
