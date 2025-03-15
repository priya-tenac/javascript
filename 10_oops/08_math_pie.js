// console.log(Math.PI)
// Math.PI=5;
// console.log(Math.PI)// the value of pi is unchangeble
//reason we cant change the object value
const pi=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(pi)

// {
//     value: 3.141592653589793,
//     writable: false,// this is reason we can't change the pi value
//     enumerable: false,
//     configurable: false
//   }

// this kind of property which is not changeble we can define also.

// 1st method to create an object
// const my_new_object=Object.create(null)// by default, it value is null 

// 2nd method to  an create object

// const chai={
//     name:"ginger tea",
//     price:"250",
//     is_available: true
// }
// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai))// this will give undefined as we doesn't pass the argument for which we have to get the descriptor
// console.log(Object.getOwnPropertyDescriptor(chai,"name"))


// property definition inside the object
// Object.defineProperty(chai,'name',{
//     writable:false,
//     enumerable: false,
//     configurable:false
// })
// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

// for (let [key,value] of chai) {
// console.log(`${key} : ${value}`);    
// }
// here the object "chai" is not iterable directly depends on situation(use "object.entries(object_name)"  to iterate the object)

// for (let [key,value] of Object.entries(chai)) {
//     console.log(`${key} : ${value}`);    
//     }

// prevent the object from code bursting use this code 
const chai={
    name:"ginger tea",
    price:"250",
    is_available: true,
    orderchai:function(){
        console.log(`chai nhi bani(code bursting)`)
    }
}
// for (let [key,value] of Object.entries(chai)) {
//     console.log(`${key} : ${value}`);    
//     }
// handling the code bursting(as we want only key,value pair in the object)
// for (let [key,value] of Object.entries(chai)) {
   
//     if (typeof value!=='function') {
//         console.log(`${key} : ${value}`);  
//     } 
//     }
    // if we want the property that there is no iteration possible with object make the "enumeration:false" in the definition of the object 
   // name is th eout of the iterable loop hence in the output name key,value pair doesn't show
    Object.defineProperty(chai,'name',{
        enumerable:false
    })

    for (let [key,value] of Object.entries(chai)) {
   
        if (typeof value!=='function') {
            console.log(`${key} : ${value}`);  
        } 
        }