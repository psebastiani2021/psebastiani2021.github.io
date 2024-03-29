/// Calculator
const input = document.getElementById('input');
const math = window.math; 
const parser = new math.parser();

input.addEventListener('input', () => {
  const filteredValue = input.value.replace(/[^0-9+\-*/.%()\[\]{}]/g, '');
  input.value = filteredValue;
});

const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', () => {
  const expression = input.value;
  try {
    const result = parser.evaluate(expression);
    resultDiv.textContent = `${result}`;
  } catch (error) {
    resultDiv.textContent = 'Syntax error.';
  }
});

function appendValue(value) {
  document.getElementById('input').value += value;
}
