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

/* Function Expression - Subtract Numbers */
function subtract(subtract1, subtract2){
    return subtract1 - subtract2;
};

function subtractNumbers(){
    let subtract1 = Number(document.querySelector("#subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);
   
    document.querySelector("#difference").value = subtract(subtract1, subtract2);
};

document.querySelector("#subtractNumbers").subtractEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
function multiply(factor1, factor2){
    return factor1 + factor2;
};

function multiplyNumbers(){
    let multiplyFactor1 = Number(document.querySelector("#multiplyFactor1").value);
    let multiplyFactor2 = Number(document.querySelector("#multiplyFactor2").value);
   
    document.querySelector("#product").value = add(multiplyFactor1, multiplyFactor1);
};

document.querySelector("#multiplyNumbers").multiplyEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (x, y) => x / y;

const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend,divisor);
    document.getElementById("quotient").value = quotient;
};

document.getElementById("divideNumbers").addEventListener("click",divideNumbers);
/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Odds Only Array */
document.querySelector('#evens').innerHTML= numbersArray.filter(number => number % 2 === 0);
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML= numbersArray.filter(number => number % 3 === 0);
/* Output Sum of Org. Array */
numbersArray.reduce((sum,number) => sum + number)
/* Output Multiplied by 2 Array */
numbersArray.map(number => number * 2)
/* Output Sum of Multiplied by 2 Array */
numbersArray.map(sum,number => number * 2)