
/*
    Деструктурирующее присваивание
    Задача 1
*/

let user = { name: "John", years: 30 };

let {name, years: age, isAdmin = false} = user

/*
    Максимальная зарплата
    Задача 2
*/

function topSalary(salaries) {
    const entries = Object.entries(salaries)
    let max = 0

    for (const item of entries) {
        let {name = item[0], value = item[1]} = item
        if (max < value) max = value
    }
    return max
}
