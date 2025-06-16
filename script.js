'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0]; // Score of both players

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Button roll
btnRoll.addEventListener('click', function () {
  // 1. Generate random int between 1 and 6
  const dice = Math.trunc(Math.random() * 6 + 1);

  console.log('dice = ' + dice);

  // 2. Show dice-image
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Increment current score by dice value

  if (dice != 1) {
    currentScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;

    console.log('current0 = ' + current0El.textContent);
  } else {
    // Zero score of current player
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    // Switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    // Toggle gui to next player
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
