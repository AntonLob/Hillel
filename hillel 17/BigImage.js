class BigImage{
    constructor(){
        this._initImage()
    }
    _initImage(){
       let block =  document.createElement('div')
       block.className = 'BigImage';

       let back = document.createElement('div');
       back.className = 'BigImage-back';
       back.addEventListener('click', ()=> this.hiden())
       
       let img = document.createElement('img');
       img.className = 'BigImage-img'

       block.append(back)
       block.append(img)

       document.body.append(block);

       this.img = img;
       this.back = back
       this.block = block
    }
    show(url){
        this.block.classList.add('visible')
        this.img.src = url
    }
    hiden(){
        this.block.classList.remove('visible')
    }
}