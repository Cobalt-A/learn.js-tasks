/*
    Вычислить сумму чисел до данного
    Задача 1
*/

function sumTo(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result = result + i;
    }
    return result;
}

function recSumTo(n) {
    if (n == 1) return 1;
    return n + recSumTo(n - 1);
}

function arSumTo(n) {
    return (n * (n + 1)) / 2;
}

// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
// - формула будет быстрее всего, рекурсия медленее всего, т.к. в отличие от цикла, есть оператор сравнения и при этом вложеные вызовы функции впринципе буду медленее итераций в цикле

// P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?
// нельзя т.к. у js есть ограничение по вложеным вызовам функций

/*
    Вычислить факториал
    Задача 2
*/

function factorial(n) {
    if (n !== 1) return n * factorial(n - 1);
    return 1;
}

/*
    Числа Фибоначчи
    Задача 3
*/

function fib(n) {
    if (n > 1) return fib(n - 1) + fib(n - 2);
    return n;
}

/*
    Вывод односвязного списка
    Задача 4
*/

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            },
        },
    },
};

function printList(list) {
    let tmp = list;
    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}

function recPrintList(list) {
    console.log(list.value);
    if (list.next) {
        printList(list.next);
    }
}

/*
    Вывод односвязного списка в обратном порядке
    Задача 5
*/

function printReverseList(list) {
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (const value of arr.reverse()) {
        console.log(value);
    }
}

function recPrintReverseList(list) {
    if (list.next) {
        printReverseList(list.next);
    }

    console.log(list.value);
}
