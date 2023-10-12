'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
const displayMessage = message => {
  document.querySelector(`.message`).textContent = message;
};
let score = 20;
let highScore = 0;
document.querySelector(`.highscore`).textContent =
  localStorage.getItem(`highScore`) || 0;
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage(`No number ⛔️!`);
  } else if (guess === secretNumber) {
    displayMessage(`🥳Correct number!`);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (score > highScore) {
      highScore = score;
      document.querySelector(
        `.label-highscore`
      ).textContent = `🥇 Highscore: ${(highScore = score)}`;

      localStorage.setItem(`Highscore:`, highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      console.log(`test`);
      displayMessage(guess > secretNumber ? `Too high!` : `Too low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`Game Over!`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(`.score`).textContent = 20;
  displayMessage(`Start guessing...`);
  document.querySelector(`.guess`).value = ` `;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
});
