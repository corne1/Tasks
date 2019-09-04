'use strict';
let money,
    time;
money = prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате YYYY-MM-DD", "");


let appData = {
  budget : money,
  timeData: time,
  expenses:{},
  optionalExpenses:{},
  income: [],
  savings: false
};  

let monthlyExpenses1 = prompt("Введите обязательную статью расходов в этом месяце"),
    monthExpMoney1 = prompt("Во сколько обойдется?"),
    monthlyExpenses2 = prompt("Введите обязательную статью расходов в этом месяце"),
    monthExpMoney2 = prompt("Во сколько обойдется?");

appData.expenses.monthlyExpenses1 = monthExpMoney1;
appData.expenses.monthlyExpenses2 = monthExpMoney2;

alert(money/30);