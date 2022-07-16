const TEMPLATE = document.getElementById('template').innerHTML;

let nameEl = document.getElementById('nameInput');
let surnameEL = document.getElementById('surnameInput');
let phoneEl = document.getElementById('phoneInput');
let btnEL = document.getElementById('btn');
let listEl = document.getElementById('container');
let erorEl = document.getElementById('eror')
let editEl = document.getElementById('edit');

btnEL.addEventListener('click' , onBtnClick);
listEl.addEventListener('click' , onDelClick);
listEl.addEventListener('click' , onEditClick);


let listElement = [];

init()

function init(){
    renderList()
}

function onBtnClick(){
    let obj = giveInfo()
    saveContact(obj)
}
function onDelClick(e){
    if(e.target.classList.contains('btn')) {
        let blockId = +e.target.parentElement.id
       deleteBlock(blockId)
    }
    renderList()
}
function deleteBlock(blockId){
    let index = listElement.findIndex(({id}) => id === blockId)
    listElement.splice(index , 1)
}

function giveInfo(){
    let obj = {
        name: nameEl.value,
        surname: surnameEL.value,
        phone: phoneEl.value,
        id: editEl.value
    }
    return obj
}
function saveContact(obj){
    console.log(obj)
    if(obj.id === String('null')){
        addContact(obj)
    }else editContact(obj)
}
function addContact(obj){
    obj.id = Math.random()
    listElement.push({...obj});
    renderList()
    cleanInput()
}
function editContact(obj){
    listElement = listElement.map((contact) =>{
        if(contact.id === +obj.id){
            return obj
        }else return contact
    }
    )
    
    renderList()
    cleanInput()
}
function generate(obj){
    return generateHTML(obj,TEMPLATE)
}
function generateHTML(obj ,template){
    for(key in obj){
        template =  template.replace(`{{${key}}}`, obj[key])
    }
    return template;
}
function renderList(){
    let listHtml = [];
    listHtml = listElement.map(generate);
    listEl.innerHTML = listHtml.join('');
}
function generate(obj){
    return generateHTML(obj,TEMPLATE)
}
function generateHTML(obj ,template){
    for(key in obj){
        template =  template.replace(`{{${key}}}`, obj[key])
    }
    return template;
}
function onEditClick(e){
    if(e.target.classList.contains('editBtn')) {
        let blockId = +e.target.parentElement.id;
       editBlock(blockId)
    }
}
function editBlock(id){
    let el =  listElement.find((cont) => cont.id === id)
    nameEl.value = el.name;
    surnameEL.value = el.surname;
    phoneEl.value = el.phone;
    editEl.value = el.id
    return el
}
function cleanInput(){
    nameEl.value = ''
    surnameEL.value = ''
    phoneEl.value = ''
    editEl.value = 'null'
}
