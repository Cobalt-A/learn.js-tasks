
/*
    Задача 1
*/

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);
readMessages.add(messages[0]);
console.log(readMessages.has(messages[1]));

messages.shift();
console.log(readMessages.has(messages[1]));

/*
    Задача 2
*/

let readMap = new WeakMap();

readMap.set(messages[0], new Date('2020'))

console.log(readMap.get(messages[0]));

