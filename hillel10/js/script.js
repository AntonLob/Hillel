const TEMPLATE = document.getElementById('tamplate').innerHTML

let listEl = document.getElementById('contactList');
let nameEL = document.getElementById('name');
let surnameEl = document.getElementById('surname');
let phoneEl = document.getElementById('phone');
let btnEl = document.getElementById('buttonContact');
let submitFormEL = document.getElementById('submitForm');
let erorEl = document.getElementById('eror');


submitFormEL.addEventListener('input' , onInpVal);
listEl.addEventListener('click' , onDelClick)
btnEl.addEventListener('click' , onBtnClick);

function onInpVal(){
    let name = nameEL.value
    let surname = surnameEl.value
    let phone = phoneEl.value
        showEror(cheakInp(name,surname,phone)) || deleteEror()
    
}
function onBtnClick(){
    let name = nameEL.value
    let surname = surnameEl.value
    let phone = phoneEl.value

    let ITEM = createEl(name,surname,phone)
    listEl.insertAdjacentHTML('afterbegin' , ITEM)
    cleanInp()
}

function createEl(a,b,c){
    let template =  TEMPLATE
    .replace('{{name}}', a)
    .replace('{{surname}}',b)
    .replace('{{phone}}',c);
    return template
}
function cleanInp(){
    nameEL.value = '';
    surnameEl.value = '';
    phone.value = '';
}
function cheakInp(a,b,c){
        if(a === '' || a.length < 4 || a === undefined){
            return 'не верное имя'
        }if(b === '' || b.length < 4 || b === undefined){
            return 'не верная фамилия'
        }if(c === '' || c.length < 4 || c === undefined || isNaN(c)){
            return 'не верный номер'
        }else return null
    
}
 
function showEror(el){
    if(el){
       return erorEl.textContent = el
    } else return null
}
function deleteEror(){
    erorEl.textContent = ''
}
function onDelClick(e){
    let el = e.target
    if(el.classList.contains('contactDal')){
        return el.parentElement.remove()
    }
}