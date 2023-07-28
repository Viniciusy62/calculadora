const numbers = document.querySelectorAll(".numbers");
const screenResult = document.querySelector("#screen-result");


numbers.forEach(number => {
  number.addEventListener("click", () => {
    const num = number.value
    screenResult.textContent = num
  })
})


const btCE = document.querySelector('#bt-ce');
const btC = document.querySelector('#bt-c');
const btPercentage = document.querySelector('#bt-percentage');
const btDivider = document.querySelector('#bt-divider');
const btMultiply = document.querySelector('#bt-multiply');
const btSubtract = document.querySelector('#bt-subtract');
const btSum = document.querySelector('#bt-sum');
const btEqual = document.querySelector('#bt-equal');
const btSumSubtract = document.querySelector('#bt-sum-subtract');
const btDot = document.querySelector('#bt-dot');

let screenOperations = document.querySelector('#screen-operations');

