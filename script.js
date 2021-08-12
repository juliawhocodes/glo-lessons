let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};



let money;
let income = 'freelance';
let addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую');
//let addIncome = 300000;
let deposit = confirm ('Есть ли у вас депозит в банке?');
console.log(deposit);

let mission = 900000;
let period = 3

let start = function() {
       do {
    money = prompt ('Каков Ваш месячный доход?');
    }
    while (!isNumber(money)) {
       
    }
}

start();


let showTypeOf = function(item) {
    console.log(typeof item);
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses = [];

/*let expensesRegular1 = prompt ('Введите первую обязательную статью расходов?');
console.log(expensesRegular1);
let howMuch1 = prompt ('Во сколько обойдется первая статья расходов?');
console.log(howMuch1);

let expensesRegular2 = prompt ('Введите вторую обязательную статью расходов?');
console.log(expensesRegular2);
let howMuch2 = prompt ('Во сколько обойдется вторая статья расходов?');
console.log(howMuch2);
*/


console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));
console.log([addExpenses]);

let getExpensesMonth = function(){
    let sum = 0;

    for (let i = 0; i < 2; i++) {
expenses[i] = prompt('Введите обязательную статью расходов');
/* if (i === 0) {
    expenses1 = prompt ('Во сколько обойдется первая статья расходов?');
} else if (i === 1) {
    expenses2 = prompt ('Введите вторую обязательную статью расходов?');
}
*/
        sum += +prompt('Во сколько это обойдется?');
    }
    console.log(expenses);
    return sum;
};


let expensesAmount = getExpensesMonth();
console.log('Расходы за месяц: ' + expensesAmount);



let getAccumulatedMonth = function(){ 
        return money - expensesAmount; 
}; 
 
console.log(Math.ceil(getAccumulatedMonth()));

let accumulatedMonth = getAccumulatedMonth();


let getTargetMonth = function() { 
    return mission / accumulatedMonth; 
}; 
console.log(Math.ceil(getTargetMonth()));

let targetFail = function() {
    if(getExpensesMonth <= 0){
        return('Цель не будет достигнута');
    } else 
    return('Цель будет достигнута через ' + (Math.ceil(getTargetMonth())) + ' месяцев');
};
console.log(targetFail());
 
let budgetDay = accumulatedMonth / 30;
console.log(Math.ceil(budgetDay));


let getStatusIncome = function(){
    if(budgetDay >= 1200){
        return('У вас высокий уровень дохода');
    } else if(budgetDay > 1200 <= 600){
        return('У вас средний уровень дохода');
    } else if(budgetDay > 600 <= 0){
        return('К сожалению у вас уровень дохода ниже среднего');
    } else {
        return('Что-то пошло не так');
    } 
}; 
 
console.log(getStatusIncome());

