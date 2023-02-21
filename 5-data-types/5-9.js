
/*
    Сумма свойств объекта
    Задача 1
*/

function sumSalaries(salaries) {
    const array = Object.values(salaries)
    let sum = 0

    for (const item of array) {
        sum = sum + item
    }
    
    return sum
}

/*
    Подсчёт количества свойств объекта
    Задача 2
*/

let user = {
  name: 'John',
  age: 30
};

function count(obj) {
    return Object.keys(obj).length
}

console.log( count(user) ); // 2
