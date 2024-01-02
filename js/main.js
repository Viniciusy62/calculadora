const screenResult = document.querySelector("#screen-result");
let screenOperations = document.querySelector('#screen-operations');



const btC = document.querySelector('#bt-c');

const clear = () => {
  screenOperations.textContent = ""
}

btC.addEventListener("click", clear)
// Clear button end



const btCE = document.querySelector('#bt-ce');
const btPercentage = document.querySelector('#bt-percentage');
const btDivider = document.querySelector('#bt-divider');
const btMultiply = document.querySelector('#bt-multiply');
const btSubtract = document.querySelector('#bt-subtract');
const btSum = document.querySelector('#bt-sum');
const btSumSubtract = document.querySelector('#bt-sum-subtract');
const btDot = document.querySelector('#bt-dot');

  const buttons = document.querySelectorAll("button")
  
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonValue = button.value
      screenOperations.textContent += buttonValue
    })
  })
  
  const btEqual = document.querySelector('#bt-equal');

  const showResult = () => {
    // const result = screenOperations.textContent
    // console.log(result)
  }

  btEqual.addEventListener("click", showResult)