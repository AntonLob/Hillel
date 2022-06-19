const obj = {
    name: 'Alex',
    age: 33,
    adress: {
       country: 'UA',
       city: 'Dnipro'
}
} ;

const objCopy = copy(obj)
function copy(object){
    let result = {}
    if(object === null || typeof(object) !== 'object'){
        return object
    }
    if(Array.isArray(object)){
        return copy(object[key])
    }for(key in object){
        result[key] = copy(object[key])
    }
    return result
}