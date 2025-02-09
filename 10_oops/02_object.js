// function multiply(num){
//     return num*5
// }
// multiply.power=3
// console.log(multiply(5));
// console.log(multiply.power);
// console.log(multiply.prototype);

function createUser(username,price){
   this.username=username
   this.price=price
}
createUser.prototype.increment=function(){
this.price++
}
createUser.prototype.printme=function(){
    console.log(`price is ${this.price}`)
}

const chai= new createUser("chai",30)
const tea= new createUser("tea",200)

chai.printme()
