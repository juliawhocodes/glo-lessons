
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

/* let budgetMonth = (parseInt(money) - parseInt(howMuch1) + parseInt(howMuch2));
console.log(budgetMonth);

let whenMission = (mission / budgetMonth);
console.log(Math.ceil(whenMission));
*/
console.log(expenses.toLowerCase());
console.log(expenses.split(', '));
console.log([expenses]);


function budgetDay(a, b) { 
    const sum = getAccumulatedMonth() / 30;
    return sum;
}
console.log(budgetDay());


/*if (budgetDay >= 1200){
    console.log('У вас высокий уровень дохода');
} else if(budgetDay > 1200 <= 600){
console.log('У вас средний уровень дохода');
} else if(budgetDay > 600 <= 0){
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('Что-то пошло не так');
}
*/


function getExpensesMonth(a, b) {
    const sum = a + b;
    return sum;
};
console.log(getExpensesMonth(parseInt(howMuch1), parseInt(howMuch2)));

function getAccumulatedMonth() { 
    const sum = parseInt(money) - getExpensesMonth(parseInt(howMuch1), parseInt(howMuch2)); 
    return sum; 
}; 
 
console.log(getAccumulatedMonth());

let accumulatedMonth = getAccumulatedMonth();
console.log(accumulatedMonth);

function getTargetMonth() { 
    const sum = mission / accumulatedMonth; 
    return sum; 
}; 
 
console.log(getTargetMonth());


function showTypeOf (all) {
    console.log(typeof all);
}
showTypeOf(accumulatedMonth);
showTypeOf(mission);
showTypeOf(mission);

function getStatusIncome () {
    const sum = mission / money; 
    return sum; 
}; 
 
console.log(Math.ceil(getStatusIncome()));

