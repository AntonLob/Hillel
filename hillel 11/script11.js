const  TEMPLATE = document.getElementById('template').innerHTML;

const CLASS_ITEM = '.block'
const DONE = 'classBlock';




let listEl = document.getElementById('list');
let btnEl = document.getElementById('btn');
let inpEl = document.getElementById('inp');
let erorEl = document.getElementById('eror')

listEl.addEventListener('click', onTodoClick);
btnEl.addEventListener('click' , onBtnClick);
inpEl.addEventListener('input' , onInputVal);

function onTodoClick(e){
   if(e.target.classList.contains('delBtn')){
      return clickDel(e)
   }else{
     return togClass(e)
   }

}

let listElement = [];

function onBtnClick(){
   let obj = takeValue();
   pushEl(obj)
   cleanInp()
   renderList()
}
function togClass(event){
   let el = event.target;
if(el.closest(CLASS_ITEM)){
      let id = getElementTask(el);
      toggleTask(id)
   }
}
function takeValue(){
    let obj = {
    text: inpEl.value,
    classBlock:  false,
    id:  Math.random(),
    }
    return obj
}
function pushEl(obj){
   return listElement.push(obj)
}
function renderList(){
   listEl.innerHTML = listElement.map(generate).join('');
}
function generate(el){
   return generateHTML(el,TEMPLATE)
}
function generateHTML(obj , template){
   template = template.replace('{{classBlock}}' , obj.classBlock ? DONE : '' )
   for(key in obj){
      template = template.replace(`{{${key}}}` , obj[key])
   }
    return template
}
function cleanInp(){
   inpEl.value = '';
}
function onInputVal(){
   if(isValidInput(inpEl.value)){
      showEror()
   }else  cleanEror()
}
function isValidInput(val){
 return (val === '' || val.length < 3) ? 'eror' : null
}
function showEror(){
   erorEl.textContent = "не валидно";
   erorEl.className = 'eror'
     blockBtn()
}
function blockBtn(){
 return  btnEl.disabled = true;
}
function cleanEror(){
   erorEl.textContent = '';
   btnEl.disabled = false;
}
function clickDel(e){
   let el = e.target;
   if(el.classList.contains('delBtn')){
      deleteBlock(el.parentElement.closest(CLASS_ITEM))
      renderList()
   }
}
function deleteBlock(el){
   let index = listElement.findIndex((block) => block.id === +el.id)
   return listElement.splice(index,1)
}



function getElementTask(el){
  return +el.closest(CLASS_ITEM).id ;
}
function toggleTask(id){
   let task = listElement.find((el) => el.id === id)
   task.classBlock = !task.classBlock
   renderList()
}