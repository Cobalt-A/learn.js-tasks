/*
    Вывод каждую секунду
    Задача 1
*/

function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(() => {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

printNumbers(5, 10);

function recPrintNumbers(from, to) {
    let current = from;

    setTimeout(function go() {
        console.log(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000);
}

recPrintNumbers(5, 10);

/*
    Что покажет setTimeout?
    Задача 2
*/

// setTimeout отработает после того как выполнится весь остальной код
