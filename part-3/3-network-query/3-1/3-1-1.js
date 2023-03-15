/*
    Получите данные о пользователях GitHub
    Задача 1
*/

async function getUsers(names) {
    let jobs = [];

    for (let name of names) {
        let job = fetch(`https://api.github.com/users/${name}`)
        .then(
            (successResponse) => {
                if (successResponse.status != 200) return null;
                successResponse.json();
            },
            (failresponse) => {
                return null;
            }
        )
        .catch(() => {
            return null;
        });
        jobs.push(job);
    }

    let results = await Promise.all(jobs);

    return results;
}

getUsers(["Cobalt-A"]).then((obj) => console.log(obj));
