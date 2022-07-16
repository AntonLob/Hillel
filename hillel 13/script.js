function Calculator(result){
    this.result = result
}
    Calculator.prototype.sum = function (num){
       return this.result += num
    }
    Calculator.prototype.sub = function (num){
       return this.result -= num
    }
    Calculator.prototype.mult = function (num){
        return this.result *= num
    }
    Calculator.prototype.div = function (num){
        return this.result /= num
    }
