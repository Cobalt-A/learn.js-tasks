/*
    Преобразуйте объект в JSON, а затем обратно в обычный объект
    Задача 1
*/

let user = {
    name: "Василий Иванович",
    age: 35,
};

jsonUser = JSON.parse(JSON.stringify(user));

/*
    Исключить обратные ссылки
    Задача 2
*/

let room = {
    number: 23,
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
    JSON.stringify(meetup, function replacer(key, value) {
        return key != "" && value == meetup ? undefined : value;
    })
);
