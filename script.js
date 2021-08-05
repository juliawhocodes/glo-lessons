
let money = prompt ('Каков Ваш месячный доход?');
console.log(money);
//let income = 'freelance';
let expenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(expenses);
//let addIncome = 300000;
let deposit = confirm ('Есть ли у вас депозит в банке?');
console.log(deposit);

let mission = 900000;
let period = 3

let expensesRegular1 = prompt ('Введите первую обязательную статью расходов?');
console.log(expensesRegular1);
let howMuch1 = prompt ('Во сколько обойдется первая статья расходов?');
console.log(howMuch1);

let expensesRegular2 = prompt ('Введите вторую обязательную статью расходов?');
console.log(expensesRegular2);
let howMuch2 = prompt ('Во сколько обойдется вторая статья расходов?');
console.log(howMuch2);


//alert("Pls confirm you read terms & conditios");
//console.log('Never never gonna give you up');

/*console.log(money, income, deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяца');
console.log('Цель заработать ' + mission +' рублей');
*/

let budgetMonth = (parseInt(money) - parseInt(howMuch1) + parseInt(howMuch2));
console.log(budgetMonth);

let whenMission = (mission / budgetMonth);
console.log(Math.ceil(whenMission));

console.log(expenses.toLowerCase());
console.log(expenses.split(', '));
console.log([expenses]);

let budgetDay = (budgetMonth / 30);
console.log(Math.floor(budgetDay));

if (budgetDay >= 1200){
    console.log('У вас высокий уровень дохода');
} else if(budgetDay > 1200 <= 600){
console.log('У вас средний уровень дохода');
} else if(budgetDay > 600 <= 0){
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('Что-то пошло не так');
}