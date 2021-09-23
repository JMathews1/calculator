

const buttonAdd = document.querySelector("#add")
const buttonSubtract = document.querySelector("#subtract")
const buttonMultiply = document.querySelector("#multiply")
const buttonDivide = document.querySelector("#divide")

const buttonClear = document.querySelector("#clear")
const buttonEquals = document.querySelector("#equals")

const screen = document.querySelector("#screen")

let string = ''
let stringTwo = []
let stringThree = []

const numButtons = document.querySelector("#container")


numButtons.addEventListener('click', displayDynamic);
numButtons.addEventListener('click', pushOperator);

buttonClear.addEventListener('click', clear);
buttonEquals.addEventListener('click', equals)

buttonAdd.addEventListener('click', addSymbol, equals)

buttonSubtract.addEventListener('click', subtractSymbol, equals)

buttonMultiply.addEventListener('click', multiplySymbol, equals)

buttonDivide.addEventListener('click', divideSymbol, equals)





function add(a, b) {
    return a+b
}

function subtract(a, b){
    return a-b
}

function multiply(a, b){
    return a*b
}

function divide(a, b){
    return a/b
}


function clear(){
   screen.innerHTML = '0'
    string=''
    stringTwo = []
    
    
}



function operate(operator, a, b){
    a = Number(a);
    b = Number(b);
    
    switch(operator) {
        case '+':
            return add(a, b)
        case '-':
            return subtract(a, b)
        case '*':
            return multiply(a, b)
        case '/':
            return divide(a, b)
    }

}

function pushOperator(e){
if(e.target.classList.contains('number')|| e.target.innerHTML === 'C'){
    return
}
    stringTwo.push(e.target.innerHTML)
}


function displayDynamic(event){
    if (!event.target.classList.contains('number')){
      return
    }
    
  
    let number = event.target.innerHTML
    string += number;
    screen.innerHTML = string;
    console.log(string)
    console.log(event)
    stringTwo.push(event.target.innerHTML)
}





function equals(){
stringTwo.length = 3;

[a, operator, b] = string.split(/([-,*,/,+,])/)
screen.innerHTML = (operate(operator, a, b)) 

console.log(stringTwo)

}



function addSymbol(){
    string += '+'
    screen.innerHTML= string;
}

function subtractSymbol(){
    string += '-'
    screen.innerHTML= string;
}

function divideSymbol(){
    string += '/'
    screen.innerHTML= string;
}

function multiplySymbol(){
    string += '*'
    screen.innerHTML= string;
}