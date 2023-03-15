/*
    Декоратор-шпион
    Задача 1
*/

function spy(func) {
    function wrapper(...args) {
        console.log(args);
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    wrapper.calls = [];

    return wrapper;
}

/*
    Задерживающий декоратор
    Задача 2
*/

function delay(func, ms) {
    return function () {
        setTimeout(() => func.apply(this, arguments), ms);
    };
}

/*
    Декоратор debounce
    Задача 3
*/

function debounce(func, ms) {
    let isReady = false;

    return function () {
        if (isReady) return;

        func.apply(this, arguments);

        isReady = true;

        setTimeout(() => (isReady = false), ms);
    };
}

let f = debounce(console.log, 1000);

f(1); // выполняется
f(2); // проигнорирован

/*
    Тормозящий (throttling) декоратор
    Задача 4
*/

function throttling(func, ms) {
    let isReady = false;
    let savedArgs;

    function wrapper(...args) {
        savedArgs = args;

        if (isReady) return;
        isReady = true;
        func.apply(this, args);

        setTimeout(() => {
            isReady = false;
            func.apply(this, savedArgs);
        }, ms);
    }
    return wrapper;
}

function f(a) {
    console.log(a);
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttling(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
