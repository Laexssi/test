let money, time;

function start() {

    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }

}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", "");
            let b = prompt("Во сколько обойдется?", "");
            if ((typeof (a)) === "string" && (typeof (a)) != null &&
                (typeof (b)) != null && a != "" && b != "" && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i = i - 1;
                alert("Введите корректное значение");

            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ваш бюджет на один день: " + appData.moneyPerDay);
        detectLevel();
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Очень мало");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средненько");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Жирненько");
        } else {
            console.log("Ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Введите сумму накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {

        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function () {
        let items = prompt("Перечислите через запятую источники доп. заработка");
        if (typeof(items) == null || items == "" || typeof(items) != "string") {
            alert("Неверные данные");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может вспомнили что-то еще?", ""));
            appData.income.sort();
            appData.income.forEach(function (element, i) {
                console.log("Способы доп. заработка номер " + (i+1) + " - " + element);
            });
        }
    }





};

function showAppData() {
    for (let key in appData) {
        console.log(key + " имеет значение " + appData[key]);
    }
};
showAppData();

// let items=[];
// while ((typeof (items)) != "string" && items == "") {
//     items = prompt("Что принесет доп доход? Перечислите через запятую", "");
// }