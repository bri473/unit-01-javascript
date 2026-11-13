"use strict"; 


let EXAM_DATE = new Date(2026, 10, 25);

function checkScreen() {
  let screenMsg = document.getElementById("screenMsg");

  if (window.innerWidth < 600) {
    screenMsg.textContent = "Small screen: turn your device sideways for a bigger card.";
  } else {
    screenMsg.textContent = "Window width: " + window.innerWidth + "px";
  }
}

function startApp() {
  checkScreen();
}