"use strict";
// Set the correct number and keep track of the user's score and high score
let correctNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Select the HTML elements that we will need to manipulate
const numberElement = document.querySelector(".number");
const messageElement = document.querySelector(".message");
const scoreElement = document.querySelector(".score");
const highscoreElement = document.querySelector(".highscore");
const guessElement = document.querySelector(".guess");

// Add an event listener to the "Check" button
document.querySelector(".checkk").addEventListener("click", function () {
  // Get the user's guess from the input field
  const guess = Number(guessElement.value);

  // Check if the user has entered a valid guess
  if (!guess) {
    messageElement.textContent = "Please enter a valid number";
  } else if (guess === correctNumber) {
    // If the user's guess is correct, update the HTML to reflect this
    messageElement.textContent = "Correct!";
    numberElement.textContent = correctNumber;
    document.body.style.backgroundColor = "#60b347";

    // Update the high score if necessary
    if (score > highscore) {
      highscore = score;
      highscoreElement.textContent = highscore;
    }

    // Disable the input field and "Check" button
    guessElement.disabled = true;
    document.querySelector(".checkk").disabled = true;
  } else if (guess < correctNumber) {
    // If the user's guess is too low, update the HTML to reflect this
    messageElement.textContent = "Too low!";
    score--;
    scoreElement.textContent = score;
  } else if (guess > correctNumber) {
    // If the user's guess is too high, update the HTML to reflect this
    messageElement.textContent = "Too high!";
    score--;
    scoreElement.textContent = score;
  }
});

// Add an event listener to the "Again" button
document.querySelector(".again").addEventListener("click", function () {
  // Reset the game to its initial state
  correctNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  messageElement.textContent = "Start guessing...";
  numberElement.textContent = "?";
  document.body.style.backgroundColor = "#222";
  guessElement.value = "";
  guessElement.disabled = false;
  document.querySelector(".checkk").disabled = false;
  scoreElement.textContent = score;
});
