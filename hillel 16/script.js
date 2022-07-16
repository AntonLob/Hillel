const TEMPLATE = document.getElementById('template').innerHTML;
const url = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';

let nameEl = document.getElementById('nameInput');
let surnameEL = document.getElementById('surnameInput');
let emailEl = document.getElementById('emailInput');
let editEl = document.getElementById('editForm')
let btnEl = document.getElementById('btn');
let listEl = document.getElementById('container');
let erorEl = document.getElementById('eror')

btnEl.addEventListener('click' , onBtnClick)
listEl.addEventListener('click' , onDelClick)
listEl.addEventListener('click' , onEditClick)

let listElement = [];

let contactAPI = new Api(url);



init()

function init(){
    readFetch()
}

function readFetch(){
    contactAPI.read()
    .then((data) => {
       listElement = data;
       renderList()
   })
}

function onBtnClick(){
    let obj = giveInfo();
    saveContact(obj)
}

function saveContact(obj){
    if(obj.id === String(null)){
        console.log(obj.id)
       return createContact(obj)
    }else return addContact(obj)
}
function addContact(obj){
    listElement = listElement.map((contact) =>{
        if(contact.id === obj.id){
            return obj
        }else return contact;
    });
    renderList()
    cleanInput()

    let {name,surname,email} = obj;
    let data = {name,surname,email}
    contactAPI.update(data , obj.id)
    .catch((eror) =>{
        console.log(eror)
        listElement.filter((contact) => contact.id !== obj.id)
        renderList()
    })
}

function createContact(obj){
    let id = Math.random();

    listElement.push({...obj , id});
    renderList();
    cleanInput()

    contactAPI.create(obj)
    .then((data) => {
        listElement = listElement.map((contact) =>
          contact.id === id ? data : contact,
        );
            renderList()
    })
    .catch((eror) =>{
        console.log(eror)
        listElement.filter((contact) => contact.id !== obj.id)
    })
}
function onEditClick(e){
     if(e.target.classList.contains('editBtn')) {
        let blockId = e.target.parentElement.id;
        editBlock(blockId)
    }
}
function editBlock(blockid){
    let editEl = listElement.find((el) => el.id === blockid);
    editContact(editEl)
}

function editContact(obj){
    editEl.value = obj.id;
    nameEl.value = obj.name;
    surnameEL.value = obj.surname;
    emailEl.value = obj.email
}


function onDelClick(e){
    if(e.target.classList.contains('btn')) {
        let block = e.target.parentElement
     contactAPI.delete(block)
     .then(() => readFetch())
}
}
function deleteBlock(blockId){
    let index = listElement.findIndex(({id}) => id === blockId)
    listElement.splice(index , 1)
}

function giveInfo(){
    let obj = {
        name: nameEl.value,
        surname: surnameEL.value,
        email: emailEl.value,
        id: editEl.value,
    }
    return obj
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
function cleanInput(){
    editEl.value = '';
    nameEl.value = '';
    surnameEL.value = '';
    emailEl.value = 'null'
};
