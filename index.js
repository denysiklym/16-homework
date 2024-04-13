const schedule = {
    Понеділок: {
        1: "Вікно",
        2: "Англійська",
        3: "Нейронка",
    },
    Вівторок: {
        1: "Англійська",
        2: "Основи програмування",
        3: "Математичний аналіз",
    },
   Середа: {
        1: "Українська",
        2: "Основи програмування",
        3: "Нейронка",
    },
    Четвер: {
        1: "Математичний аналіз",
        2: "Англійська",
        3: "Критичне мислення",
    },
   Пʼятниця: {
        1: "ІКТ",
        2: "Українська",
        3: "Нейронка",
    },
};

function printDaySchedule(day, lessons) {
    console.log(`${day}:`);
    for (let lesson in lessons) {
        console.log(`Пара ${lesson}: ${lessons[lesson]}`);
    }
    console.log();
}

for (let day in schedule) {
    printDaySchedule(day, schedule[day]);
}