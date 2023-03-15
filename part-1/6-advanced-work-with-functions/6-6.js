/*
    Установка и уменьшение значения счётчика
    Задача 1
*/

function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = (value) => (count = value);

    counter.decrease = () => count--;

    return counter;
}

let func = makeCounter();

func.set(5);
func.decrease();
func();

console.log(func());

/*
    Сумма с произвольным количеством скобок
    Задача 2
*/

function sum(a) {
    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function () {
        return currentSum;
    };

    return f;
}

console.log(sum(1)(2).toString()); // 3
console.log(sum(5)(-1)(2).toString()); // 6
console.log(sum(6)(-1)(-2)(-3).toString()); // 0
console.log(sum(0)(1)(2)(3)(4)(5).toString()); // 15
