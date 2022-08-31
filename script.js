'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let realScore = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //if no INPUT
  if (!guess) {
    /* document.querySelector('.message').textContent = '🛑 NO NUMBER!'; */
    displayMessage('🛑 NO NUMBER!');
    //WHEN PLAYER WIN
  } else if (guess === secretNumber) {
    if (realScore > 1) {
      /*  document.querySelector('.message').textContent = '🥳 Correct Number!'; */
      displayMessage('🥳 Correct Number!');
      document.querySelector('body').style.backgroundImage =
        'linear-gradient(-60deg, #ff5858 0%, #f09819 100%)';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;

      if (realScore > highscore) {
        highscore = realScore;
        document.querySelector('.highscore').textContent = highscore;
      }

      // IF PLAYER TRY TO GET WINNER NUMBER AFTER LOSE
    } else {
      /*  document.querySelector('.message').textContent =
        '☠️ NOPE YOU HAVE ALREADY LOST THE GAME '; */
      displayMessage('☠️ NOPE YOU HAVE ALREADY LOST THE GAME ');
      /* document.querySelector('.score').textContent = 0; */
      displayScore(0);
    }

    //WHEN WRONG NUMBER
  } else if (guess !== secretNumber) {
    if (realScore > 1) {
      /*  document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High!' : '📉 Too low!'; */
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too low!');
      realScore--;
      document.querySelector('.score').textContent = realScore;
    } else {
      /*   document.querySelector('.message').textContent = '☠️ YOU LOST THE GAME '; */
      displayMessage('☠️ YOU LOST THE GAME ');
      /*  document.querySelector('.score').textContent = 0; */
      displayScore(0);
    }
  }
});

//GAME RESET
document.querySelector('.again').addEventListener('click', function () {
  realScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.score').textContent = realScore;
  /*   document.querySelector('.message').textContent = 'Start guessing...'; */
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundImage =
    ' linear-gradient(to right, #434343 0%, black 100%)';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
