'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0]; // Score of both players
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let playing = true;

const setStartingConditions = function () {
  currentScore = 0;
  activePlayer = 0;
  const scores = [0, 0]; // Score of both players
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.remove('hidden');
  playing = true;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  current0El.textContent = 0;
  current1El.textContent = 0;
  scores = [0, 0];
};
const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  // Switch to next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  // Toggle gui to next player
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
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
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to active player's score
    scores[activePlayer] += currentScore;
    //   Update  player's score
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check if player's score >= 10
    //   If yes - player wins,
    //   Else - switch players
    if (scores[activePlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  setStartingConditions();
});
