let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};



let money;

let start = function() {
    do {
 money = prompt ('Каков Ваш месячный доход?');
 }
 while (!isNumber(money)) {
    
 }
}

start();

let deposit = confirm ('Есть ли у вас депозит в банке?');
console.log(deposit);

let income = 'freelance';
let addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую');

let mission = 900000;
let period = 3




let showTypeOf = function(item) {
    console.log(typeof item);
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses = [];


console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));
console.log([addExpenses]);
 
let getExpensesMonth = function(){
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов');

        do {
         tmp = prompt('Во сколько это обойдется?');
        } while (!isNumber(tmp))
        sum += +tmp
    }  
    console.log(expenses);
        return sum
    
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
    if(getTargetMonth() <= 0){
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
    } else if(budgetDay < 1200  && budgetDay >= 600){
        return('У вас средний уровень дохода');
    } else if(budgetDay < 600 && budgetDay >= 0){
        return('К сожалению, у вас уровень дохода ниже среднего');
    } else {
        return('Что-то пошло не так');
    } 
}; 
 
console.log(getStatusIncome());