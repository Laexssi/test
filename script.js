let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let mandatoryExpense = +prompt("Введите обязательную статью расходов в этом месяце", "");
let mandatoryExpenseCost = +prompt("Во сколько обойдется?", "");
let appData = {
    budget: money,
    timeData: time,
    expenses: {
        mandatoryExpense: mandatoryExpenseCost
    },
    optionalExpenses: {},
    income: [],
    savings: false
}
let oneDayBudget = (+money/30);
alert("Ваш бюджет на один день: " + oneDayBudget);
