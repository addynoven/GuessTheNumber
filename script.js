"use strict";
//secretNumber
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guessing = Number(document.querySelector(".guess").value);
  //Empty guess...
  if (!guessing) {
    document.querySelector(".message").textContent = "⛔ NO Number";
  }
  if (score >= 1) {
    //win conduction
    if (guessing === secretNumber) {
      document.querySelector(".message").textContent = "🎉 Correct Number!";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = secretNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    }
    // when guess is high
    else if (guessing > secretNumber) {
      document.querySelector(".score").textContent = --score;
      document.querySelector(".message").textContent = "📈 Too high";
    }
    // when guess is low
    else {
      document.querySelector(".score").textContent = --score;
      document.querySelector(".message").textContent = "📉 Too low";
    }
  }
  if (score === 0) {
    document.querySelector(".score").textContent = 0;
    document.querySelector(".message").textContent = "💥 u Lost the game...";
  }
});
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
