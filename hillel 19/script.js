$(() =>{
    const noteUrl = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/';
const TEMPLATE_NOTE = $('#note-template').html();

const DELETE_CLASS = '.delete-note-img';
const TEXT_CLASS = '.noteText'

let noteList = [];

let $container = $('#container');
let $AddBtn = $('#add-note')

$AddBtn.on('click' , onAddClick);
$container.on('click' ,DELETE_CLASS, onDelclick);
$container.on('change' ,TEXT_CLASS, onNoteChange);


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
       let  $el = $(this)

        $el.parents('.note').fadeOut(400)
        setTimeout(1000,deleteNote(event.target.parentElement.closest('.note').id))
}

function onNoteChange(event){
        changeNote(event.target.parentElement.closest('.note'))
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
        template = template.replace(`{{${key}}}`,obj[key]);
    }
    return template
}
function addNote(html){
   return $container.html(html);
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
    
    fetch(noteUrl + el.id , {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers:{"Content-Type" : "application/json"},
    })
    .then((res) => res.json())
    .then(() => getData())
}
})