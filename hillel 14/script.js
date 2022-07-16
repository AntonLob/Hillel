const SMALL_BURGER = {
    sold: 50,
    cal: 20,
}
const MEDIUM_BURGER = {
    sold: 75,
    cal: 30,
}
const BIG_BURGER = {
    sold: 100,
    cal: 40,
}
const TOPINGS = {
    CHESSE:{
        sold: 10,
        cal: 20,
    },
    SALAT:{
        sold: 20,
        cal: 5,
    },
    POTATO:{
        sold: 15,
        cal: 10,
    },
    PRIPRAVA:{
        sold: 15,
        cal: 0,
    },
    MAYO:{
        sold: 20,
        cal: 5,
    },

}
class Hamburger{
    constructor(obj){
        this.sold = obj.sold;
        this.cal = obj.cal;
    }
    addTopping(obj){
        let {sold,cal} = obj;
        
        this.sold += sold
        this.cal += cal
    }
    removeTopping(obj){
        let {sold,cal} = obj;
        
        this.sold -= sold
        this.cal -= cal
    }
    getPrice(){
        return this.sold
    }
    getCal(){
        return this.cal
    }
}
