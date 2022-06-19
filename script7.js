function getCalc(acc){
    let result = acc;
    return {
        add:(...num) => {
        return result = result + num.reduce((acc,num) => acc + num,0);
        },
        sub:(...num) =>{
            return result = result * num.reduce((acc,num) => acc * num,1);
               },
        del:(...num) =>{
            return result = result / num.reduce((acc,num) => acc * num,1);
        },
        vich:(...num) =>{
            return result = result - num.reduce((acc,num) => acc + num,0);
        },
        get:() =>{
            return result
        }
    }
}
let calc = getCalc(100)
console.log(calc.add(100,10));
console.log(calc.sub(10,2));
console.log(calc.vich(200,1000));
console.log(calc.del(1000,3));
console.log(calc.get())

