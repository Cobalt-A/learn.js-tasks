/*
    Создайте дату
    Задача 1
*/

let d = new Date(2012, 1, 20, 3, 12);
console.log(d);

/*
    Покажите день недели
    Задача 2
*/

function getWeekDay(date) {
    const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    return days[date.getDay()];
}

/*
    День недели в европейской нумерации
    Задача 3
*/

function getLocalDay(date) {
    const day = date.getDay();
    return day == 0 ? 7 : day;
}

/*
    Какой день месяца был много дней назад?
    Задача 4
*/

function getDateAgo(date, days) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - days);
    return newDate.getDate();
}

/*
    Последнее число месяца?
    Задача 5
*/

function getLastDayOfMonth(year, month) {
    const date = new Date(year, month + 1, 0);
    return date.getDate();
}

/*
    Сколько сегодня прошло секунд?
    Задача 6
*/

function getSecondsToday() {
    const now = new Date();

    const date = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    return Math.round((now - date) / 1000);
}

/*
    Сколько секунд осталось до завтра?
    Задача 7
*/

function getSecondsToTomorrow() {
    const now = new Date();
    const daySeconds = 24 * 60 * 60;
    const nowDaySeconds = now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds();

    return daySeconds - nowDaySeconds;
}

/*
    Форматирование относительной даты
    Задача 8
*/

function formatDate(date) {
    const time = new Date() - date;
    const seconds = time / 1000;
    if (seconds <= 1) return `прямо сейчас`;
    if (seconds < 60) return `${seconds} сек. назад`;
    if (seconds < 3600) return `${Math.round(seconds / 60)} мин. назад`;
    if (seconds < 86400) return `${Math.round(seconds / 60 / 60)} часов назад`;

    const oldDate = new Date(new Date() - time);
    return `${oldDate.getDate()}.${oldDate.getMonth()}.${oldDate.getFullYear()}, ${oldDate.getHours()}:${oldDate.getMinutes()}`;
}
