/// Tools
// Calculator
const input = document.getElementById('input');
const math = window.math; // Reference to the math.js library
const parser = new math.parser();

input.addEventListener('input', () => {
  // Remove any non-numeric, non-symbol, non-grouping, and non-brace characters from the input value
  const filteredValue = input.value.replace(/[^0-9+\-*/.%()\[\]{}]/g, '');
  input.value = filteredValue;
});

const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', () => {
  const expression = input.value;
  try {
    // Use the mathjs-expression-parser to evaluate the expression
    const result = parser.evaluate(expression);
    resultDiv.textContent = `${result}`;
  } catch (error) {
    resultDiv.textContent = 'Syntax error.';
  }
});

function appendValue(value) {
  document.getElementById('input').value += value;
}
// Console message
window.onload = onLoadMsg
function onLoadMsg() {
  console.log("Student Tools is an open source project. https://github.com/psebastiani2021/psebastiani2021.github.io");
}
