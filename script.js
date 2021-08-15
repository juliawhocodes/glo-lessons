let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) && n !== ' '
  };
  
  const guessNumber = (randomNumber = 0) => {
    if (!randomNumber) {
      randomNumber = Math.floor(Math.random() * 100)
    }
    
    let userGuess = prompt('Угадайте число от 1 до 100')
    console.log('random:', randomNumber, 'user guess:', userGuess)
    
    if (userGuess === null) {
      confirm('Игра окончена')
      return;
    }
    
    if (!isNumber(userGuess)) {
      confirm('Введите число!')
      guessNumber(randomNumber)
    }
      
    if (randomNumber == userGuess) {
      alert('Поздравляем, Вы угадали!!!');
      return;
    }
  
    if (userGuess > randomNumber) {
      confirm('Загаданное число меньше')
      guessNumber(randomNumber)
    }
    
    if (userGuess < randomNumber) {
      confirm('Загаданное число больше')
      guessNumber(randomNumber)
    }
  }
  
  guessNumber()