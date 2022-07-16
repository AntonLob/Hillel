const TEMPLATE_ALBUM = document.getElementById('templateAlbum').innerHTML
const TEMPLATE_PICTURE = document.getElementById('templatePicture').innerHTML

const albumURL = 'https://jsonplaceholder.typicode.com/albums';
const picturesURL = 'https://jsonplaceholder.typicode.com/photos';

let asideListEl = document.getElementById('listAlbum');
let containerEl = document.getElementById('listPictures');

asideListEl.addEventListener('click' , onListAlbumClick)
containerEl.addEventListener('click' , onPictureClick)

function onPictureClick(e){
    if(e.target.classList.contains('photo-item')){
        let url = e.target.parentElement.dataset.url
        bigImage.show(url)
    }

}
let listApi = new RestApi(albumURL)
let albumApi = new RestApi(picturesURL)
let bigImage = new BigImage;

let listAlbum = [];
let album = []

function onListAlbumClick(event){
    let albumId = event.target.id
    getAlbum(albumId)
}

init()

function init(){
    getAlbumList()
    .then((album) => getAlbum(album[0].id))
}


function getAlbumList(){
   return listApi.getList()
    .then(renderList)
}
function getAlbum(id){
    fetchAlbum(id)
}
function fetchAlbum(albumId){
   return albumApi.getList({albumId})
    .then((data) => {
        album = data;
        renderAlbum()
    })
    
}
function renderAlbum(){
    containerEl.innerHTML = album.map(generateAlbum).join('');

    
}
function generateAlbum(obj){
    return generateHTML(obj,TEMPLATE_PICTURE)
}
function generateHTML(obj,template){
    for(key in obj){
        template =  template.replace(`{{${key}}}`, obj[key])
        }
        return template
}
function renderList(list){
    asideListEl.innerHTML  = list.map(generate).join('');
     
   return list
}
function generate(obj){
   return generateList(obj,TEMPLATE_ALBUM)
}
function generateList(obj, template){
   for(key in obj){
   template =  template.replace(`{{${key}}}`, obj[key])
   }
   return template
}