let inpEl = document.getElementById('inp');
let btnEl = document.getElementById('btn');
let erorEl = document.getElementById('eror');
let listEl = document.getElementById('list');

inpEl.addEventListener('input' , onInputVal);
btnEl.addEventListener('click' , onBtnClick);
listEl.addEventListener('click' , onLiClick)

function onInputVal(){
    isValidInput(inpEl.value);
    if(isValidInput(inpEl.value)){
        showEror(isValidInput(inpEl.value))
        blockBtn()
    }else {
        btnEl.addEventListener('click' , onBtnClick);
        cleanEror()
    }
}
function onBtnClick(){
    let divEL = createEl()
    pushElement(divEL)
    clearInput()
}
function isValidInput(val){
    if(val === ''){
        return 'Вы Ничего не ввели'
    }if(val.length < 3){
        return 'Слишком мало символов'
    }else return null
}
function createEl(){
    let El = document.createElement('div')
    El.textContent = inpEl.value
    El.className = 'block'
    return El
}
function pushElement(el){
    listEl.append(el)
}
function clearInput(){
    inpEl.value = ''
}
function blockBtn(){
    btnEl.ariaDisabled
}
function showEror(msg){
     erorEl.textContent = msg;
     erorEl.className = 'eror'
}
function cleanEror(){
    erorEl.textContent = ''
}
function blockBtn(){
    btnEl.removeEventListener('click' , onBtnClick);
}
function onLiClick(event){
    let targetEl = event.target;
    return targetEl.classList.toggle('red')
}