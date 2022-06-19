let operandAel = document.getElementById('inp1');
let operandBel = document.getElementById('inp2');
let operatorEl = document.getElementById('operator');
let resultEl = document.getElementById('result');
let erorEl = document.getElementById('eror');
let btnEl = document.getElementById('btn');

btnEl.addEventListener('click' , onBtnClick)
operandAel.addEventListener('input' , onInputVal);
operandBel.addEventListener('input' , onInputVal);

function onInputVal(){
   let  operandA = operandAel.value;
   let operandB = operandBel.value;
  let valid =  validateElements(+operandA,+operandB)
  if(valid){
    clenerResult()
    showEror()
  }else{
    clenerEror()
}
}

function validateElements(a,b){
   return validateElement(a) || validateElement(b);
}
function validateElement(el){
    return isNaN(el) || el === '';
}
function  showEror(){
    erorEl.textContent = 'eror'
}
function clenerEror(){
    erorEl.textContent = '';
}
function onBtnClick(){
    let operandA = operandAel.value;
    let operandB = operandBel.value;
    let operator = operatorEl.value
    let result = calculate(+operandA,+operandB,operator)
    showResult(result)
}
function calculate(a,b,op){
    switch(op){
        case('+'):
        return a + b;
        case('-'):
        return a - b;
        case('*'):
        return a * b;
        case('/'):
        return a / b;
    }
}
function showResult(result){
    resultEl.textContent = result
}
function clenerResult(){
    resultEl.textContent = '';
}