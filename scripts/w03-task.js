/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
};

function addNumbers(){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
   
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
};

document.querySelector("#addNumbers").addEventListener("click", addNumbers);
  

  const addNumBtn = document.querySelector("#addNumbers");
  addNumBtn.addEventListener("click", addNumbers);
  
/* Function Expression - Subtract Numbers */
  const subtractFunction = function subtract(number1, number2) {
    return parseInt(number1) - parseInt(number2);
  }
  
  function subtractNumbers() {
    let minuend = document.querySelector("#minuend").value;
    let subtrahend = document.querySelector("#subtrahend").value;
    let getDiff = document.querySelector("#difference");
  
    const diffOfTwo = subtractFunction(minuend, subtrahend);
  
    getDiff.value = diffOfTwo;
  }
  
  const subNumBtn = document.querySelector("#subtractNumbers");
  subNumBtn.addEventListener("click", subtractNumbers);
  
/* Arrow Function - Multiply Numbers */
  const multiply = (number1, number2) => {
    return parseFloat(number1) * parseFloat(number2);
  }
  
  const multiplyNumbers = () => {
    let factor1 = document.querySelector("#factor1").value;
    let factor2 = document.querySelector("#factor2").value;
    let getProduct = document.querySelector("#product");
  
    const productOfTwo = multiply(factor1, factor2);
  
    getProduct.value = productOfTwo;
  }
  
  const multNumBtn = document.querySelector("#multiplyNumbers");
  multNumBtn.addEventListener("click", multiplyNumbers);
  
/* Open Function Use - Divide Numbers */
  const divide = (number1, number2) => {
    return parseFloat(number1) / parseFloat(number2);
  }
  
  const divideNumbers = () => {
    let dividend = document.querySelector("#dividend").value;
    let divisor = document.querySelector("#divisor").value;
    let getQuotient = document.querySelector("#quotient");
  
    const quotientOfTwo = divide(dividend, divisor);
  
    getQuotient.value = quotientOfTwo;
  }
  
  const quotientNumBtn = document.querySelector("#divideNumbers");
  quotientNumBtn.addEventListener("click", divideNumbers);

  

  const currentDate = new Date();

  let currentYear = null;
  

  currentYear = currentDate.getFullYear();
  

  const displayCurrentYear = document.querySelector("#year");
  
  displayCurrentYear.innerHTML = currentYear;
  
/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
  let numbersArray = [];
  for (let i = 1; i <= 25; i++) {
    numbersArray.push(i);
  }
  console.log(numbersArray);
  
  // Value of the array variable to the HTML element with an ID of "array"
  const htmlArray = document.querySelector("#array"); 
  htmlArray.innerHTML = numbersArray;

  /* Output Odds Only Array */
  const odds = document.querySelector("#odds");
  const evens = document.querySelector("#evens");
  let oddNumbers = []
  let evenNumbers = []
  
  numbersArray.filter((number) => {
    (number % 2) ? oddNumbers.push(number) : evenNumbers.push(number);
  })
  
  odds.innerHTML = oddNumbers;
  
/* Output Evens Only Array */
  evens.innerHTML = evenNumbers;
  
/* Output Sum of Org. Array */
  const sumArray = numbersArray.reduce((num1, num2) => num1 + num2);
  
  document.querySelector("#sumOfArray").innerHTML = sumArray;
  
/* Output Multiplied by 2 Array */
  const doubleArray = numbersArray.map(num => num * 2);
  
  document.querySelector("#multiplied").innerHTML = doubleArray;
  
/* Output Sum of Multiplied by 2 Array */
  const sumDoubleArray = doubleArray.reduce((num1, num2) => num1 + num2);
  
  document.querySelector("#sumOfMultiplied").innerHTML = sumDoubleArray;