// Calculator
const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.getElementById('equal');
const clearButton = document.getElementById('clear');

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    display.value += button.textContent;
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    display.value += button.textContent;
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
  display.value = '';
});

const dotButton = document.querySelector(".dot");

dotButton.addEventListener("click", () => {
  if (!currentNumber.includes(".")) {
    currentNumber += ".";
    updateDisplay();
  }
});
// Console message
window.onload = onLoadMsg
function onLoadMsg() {
  console.log("Student Tools is an open source project. https://github.com/psebastiani2021/psebastiani2021.github.io");
}
