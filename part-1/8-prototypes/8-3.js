/*
    Добавить функциям метод "f.defer(ms)"
    Задача 1
*/

Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
};

function f() {
    console.log("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду

/*
    Добавьте функциям декорирующий метод "defer()"
    Задача 2
*/

Function.prototype.defer = function (ms) {
    let context = this;

    function wrapper(...args) {
        setTimeout(() => {
            context.apply(this, args);
        }, ms);
    }

    return wrapper;
};

function f(a, b) {
    console.log(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
