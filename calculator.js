

const buttonAdd = document.querySelector("#add")
const buttonSubtract = document.querySelector("#subtract")
const buttonMultiply = document.querySelector("#multiply")
const buttonDivide = document.querySelector("#divide")

const buttonClear = document.querySelector("#clear")
const buttonEquals = document.querySelector("#equals")

const buttonOperate = document.querySelectorAll(".operator")

const screen = document.querySelector("#screen")

let string = ''
let stringTwo = ''




const numButtons = document.querySelector("#container")


numButtons.addEventListener('click', displayDynamic);


buttonClear.addEventListener('click', clear);
buttonEquals.addEventListener('click', equals)



buttonAdd.addEventListener('click', addSymbol)
buttonAdd.addEventListener('click', findIfOperator)

buttonSubtract.addEventListener('click', subtractSymbol)
buttonSubtract.addEventListener('click', findIfOperator)

buttonMultiply.addEventListener('click', multiplySymbol)
buttonMultiply.addEventListener('click', findIfOperator)

buttonDivide.addEventListener('click', divideSymbol)
buttonDivide.addEventListener('click', findIfOperator)




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
   screen.textContent = '0'
    string=''
    stringTwo=''
    
    
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




    function displayDynamic(event){
    if (!event.target.classList.contains('number')){
      return
    } 
    
    
    let number = event.target.textContent
    string += number;
    screen.textContent = string;
    console.log(string)
    console.log(event)
    
}


function findIfOperator(){
       
     equals()
       
    
    
}


function equals(){


[a, operator, b] = string.split(/([-,*,/,+,])/)

if(b == 0) return

screen.textContent = (operate(operator, a, b)) 
stringTwo += screen.textContent

string = ''

string += stringTwo
console.log(string)
console.log(stringTwo)



}



function addSymbol(){
    string += '+'
    screen.textContent= string;
}

function subtractSymbol(){
    string += '-'
    screen.textContent= string;
}

function divideSymbol(){
    string += '/'
    screen.textContent= string;
}

function multiplySymbol(){
    string += '*'
    screen.textContent= string;
}