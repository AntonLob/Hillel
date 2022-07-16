const noteUrl = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/';
const TEMPLATE_NOTE = document.getElementById('note-template').innerHTML;

const DELETE_CLASS = 'delete-note-img';
const TEXT_CLASS = 'noteText'

let noteList = [];

let containerEl = document.getElementById('container');
let AddBtnEL = document.getElementById('add-note')
let containetEL = document.getElementById('container')

AddBtnEL.addEventListener('click' , onAddClick);
containerEl.addEventListener('click' , onDelclick)
containerEl.addEventListener('change' , onNodeChange)


init()

function init(){
    getData()
}
function getData(){
    fetch(noteUrl)
    .then((res) => res.json())
    .then((data) => {
        noteList = data
    renderList()
    })
}

function onAddClick(){
    let obj = {
        description: "",
    }
    createNote(obj)
}

function onDelclick(event){
    let el = event.target;
    if(el.classList.contains(DELETE_CLASS)){
         deleteNote(el.parentElement.closest('.note').id)
    }
    
}

function onNodeChange(event){
    el = event.target
    if(el.classList.contains(TEXT_CLASS)){
        changeNote(el.parentElement.closest('.note'))
    }
}



function createNote(obj){
    fetch(noteUrl , {
        method: 'POST',
        body: JSON.stringify(obj),
        headers:{"Content-Type" : "application/json"},
    })
    .then((res) => res.json())
    .then((data) =>{
        noteList.push(data);
        renderList()
    })
}
function renderList(){
    let html = noteList.map(generate).join('');
    addNote(html)
}
function generate(obj){
    return generateHTML(obj,TEMPLATE_NOTE)
}
function generateHTML(obj,template){
    for(key in obj){
        template = template.replace(`{{${key}}}` , obj[key])
    }
    return template
}
function addNote(html){
   return containerEl.innerHTML = html;
}

function deleteNote(id){
    fetch(noteUrl + id, {
        method:'DELETE',
    })
    .then((res) => res.json)
    .then(() => getData())
}

function changeNote(el){
    let obj = noteList.find((elList) => elList.id === el.id);
    obj.description = el.lastElementChild.value;
    console.log(obj)
    
    fetch(noteUrl + el.id , {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers:{"Content-Type" : "application/json"},
    })
    .then((res) => res.json())
    .then(() => getData())
}