// const user={
//     user_name:"savya",
//     price: 999,
//     welcome_message:function(){
//         console.log(`${this.user_name}, welcome to your own kingdom.`);
//     }
// // this refers to current context
// }
// // user.welcome_message
// user.welcome_message()
// user.user_name="sam"
// user.welcome_message()

// const user={
//     user_name:"savya",
//     price: 999,
//     welcome_message:function(){
//         console.log(`${this.user_name}, welcome to your own kingdom.`);
//         console.log(this)
//     }
// // this refers to current context
// }
// // user.welcome_message
// user.welcome_message()
// user.user_name="sam"
// user.welcome_message()



const user={
    user_name:"savya",
    price: 999,
    welcome_message:function(){
        console.log(`${this.user_name}, welcome to your own kingdom.`);
        console.log(this)
    }
// this refers to current context  in the objects
}
// console.log(this)// "this" will give empty curly braces because we are currently in node environment and this will give empty object in node
//"this" will give window in the browser console i.e.  the global object in browser in wwindow

// function chai(){

//     console.log(this)
// }
// chai()// here"this" will give lot of data include global variables and all


// function chai(){
//     let user_name="savya"
//     console.log(this.user_name)
// }
// chai()// this will give undefined=> "this." doesn't work like it work in the objects

// const chai=function()
// {
//     let user="savya"
//     console.log(this.user)
// }
// chai()


// arrow function
// const chai=()=>
// {
//     let user="savya"
//     console.log(this)
// }
// chai()
// here "this" will give empty object but is undefined when use with "this."=> inside function "this" will work as it does work on browser console

// basic syntax of arrow function 
//   ()=>{}


    // const addtwo=(num1,num2)=>{
    //     return num1+num2
    // }

//   console.log(addtwo(4,5))

// when we use curly braces {} then return must be written, when we write statements within the parenthesis or simple statement , then there is no need to return

// implicit return (without return keyword)
//   const addtwo=(num1,num2)=> num1+num2
// const addtwo=(num1,num2)=>( num1+num2)
 // when we return an object, then there is need of parenthesis
 const addtwo=(num1,num2)=>( {user:"savya"})
 
  console.log(addtwo(6,7))
   
  const myarray=[1,2,3,4,5]
//   myarray.forEach(function (){})// this is the correct syntax
//   myarray.forEach(()=>{})// this is correct syntax
  myarray.forEach(()=>())// this is also correct for arrow function
