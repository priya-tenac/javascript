// console.log(Math.PI)
// Math.PI=5;
// console.log(Math.PI)// the value of pi is unchangeble
//reason we cant change the object value
const pi=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(pi)

// {
//     value: 3.141592653589793,
//     writable: false,// this is reason we can't change the pi value
//     enumerable: false,
//     configurable: false
//   }

// this kind of property which is not changeble we can define also.


const my_new_object=Object.create(null)// by default, it value is null 
