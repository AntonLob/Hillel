const TEMPLATE = document.getElementById('template').innerHTML;

let nameEl = document.getElementById('nameInput');
let surnameEL = document.getElementById('surnameInput');
let phoneEl = document.getElementById('phoneInput');
let listEl = document.getElementById('container');


let listElement = [];

init()

function init(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
        listElement = data;
        renderList()
    })
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
    let {street , city} = obj.address
    template = template.replace(`{{adress}}`, street + city)
    for(key in obj){
        template =  template.replace(`{{${key}}}`, obj[key])
    }
    return template;
}
