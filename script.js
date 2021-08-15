let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n) && n !== ' ';
  };

const game = function () {
  const randomNumber = Math.floor(Math.random() * 100);

  function repeat() {
    let userNumber = prompt('Введите число!');

    if (isNumber(userNumber)) {

      if (userNumber > randomNumber) {
        alert('Загаданное число меньше');
        repeat();
      } else if (userNumber < randomNumber) {
        alert('Загаданное число больше');
        repeat();
      } else if (+userNumber === randomNumber) {
        let again = confirm('Поздравляем, Вы угадали!!! Хотите сыграть ещё раз?');
        if (again) { 
          repeat(); 
        }
        else {
          alert('Игра окончена');
        }
      }
      else {
        alert('Что-то пошло не так');
        repeat();
      }
    }
    else if (userNumber === null) {
      alert('Игра окончена');
    }

    else if (!isNumber(userNumber)) {
      alert('Это не число! Введите, пожалуйста, число!');
      repeat();
    }
  }
  repeat();
};
game();
   
