// Calculator
const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.getElementById('equal');
const clearButton = document.getElementById('clear');
const dotButton = document.querySelector(".dot");
let currentNumber = "";

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentNumber += button.textContent;
    updateDisplay();
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentNumber += button.textContent;
    updateDisplay();
  });
});

equalButton.addEventListener('click', () => {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Syntax error';
  }
});

clearButton.addEventListener('click', () => {
  currentNumber = "";
  updateDisplay();
});

dotButton.addEventListener("click", () => {
  if (!currentNumber.includes(".")) {
    currentNumber += ".";
    updateDisplay();
  }
});

const update

// Console message
window.onload = onLoadMsg
function onLoadMsg() {
  console.log("Student Tools is an open source project. https://github.com/psebastiani2021/psebastiani2021.github.io");
}
