/*
  for master   javascript , need to master two things 1)objects 2)web events of browsers

 javascript is dynamic type language because it doesn't need to specify the data type at compile time, it check data tpye at run time 
 , data type is taken on the basis of the value given of the varibles
 static type language is the language for which data type is defined at the compile time i.e. data type is mandatory at the the time of code written
 
 
 
 how the data are stored in the memory and how it is accessed based on that 
 there are two types of data 
 1) primitive
  primitive datatypes are call by value type of data as because when we pass the value of that type of data then we copied 
  that value at another place rahter than passing the reference  to the data
     there are 7 category of primitive datatype 

     1)string
     2)number
     3)boolean
     4)null
     5)undefined
     6)symbol
     7)bigInt

 2)non primitive/reference type
  in such type of data we directly reference its address in the memory
  1)array
  2)objects
  3)functions

*/
// symbol example

// const id =Symbol('1234')
// const another_id=Symbol('1234')
// console.log(id===another_id)// this give false output => symbol is used to create unique constant=> we get different retunr values




//bigINT
// const big_number=123345678760n;

//array
//  const heros=["shaktiman","nagraj","doga"];
//  // object

// let my_object={
//     name:"priya",
//     age:22,

//  }
//  // function
//  // function declaration as variable in the js
//   const my_function=function(){
//     console.log("hello, its me, the tenacious one.")

// }


// the datatype of non primitive is usually "object"



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack(primitive), heap(non-primitive)


//primitive
//  let my_you_tube="abcd"
//  let another_name=my_you_tube
//  another_name="lets achieve the goal"
//  console.log(another_name)
//  console.log(my_you_tube)
 

//non-primitive
//  let user_one={
//   email:"user@google.com",
//   upi:"user@ptyes"
//  }

//  let user_two=user_one
//  user_two.email="phgsss@google.com"
//  console.log(user_one)
//  console.log(user_two)

