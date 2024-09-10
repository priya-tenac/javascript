
// var c=300;
//  if(true){

//     let a=10;
//     const b=20;
//     var c=30;
//  }
// console.log(a)
// console.log(b)
// console.log(c)
// var doesn't scope dependent, it can be access outof the scope given
// even if we delclare a global scope even though var will take inner scope value, at large level , we can't decide that var takes which value

// console.table([a,b,c])
//   let a =300
//  if(true){
//      let a=10;
//       console.log(`inner value of a is ${a}.`)
//      }
//       console.log(`outer value of a is ${a}`);
//       // global scope value are different at different paltform (different in windows(console),node)


// function one()
// {
//     const user_name="savya"
//     function two()
//     {
//         const websites="youtube"
//         console.log(user_name);

//     }
//     console.log(websites)
//     two()
// }
// one()
//A closure in JavaScript is a function that has access to variables in its parent scope, even after the parent function has returned


if(true){
    const user_name="savya"
    if(user_name==="savya"){
        const websites=" youtube"
        // console.log(user_name+websites)
    }
    // console.log(websites);
}
// console.log(user_name)

//++++++++++++++++++++++++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++

// this is called function
function addone(num){
    return num+1
}
addone(5)
// in case of function , if function call is done before function definition, then there is no problem in the execution of function
// this is called expression
 const addtwo=function(num){
    return num+3
 }

 addtwo(8)
 // in case of expression, if function call is done before function definition then it will give error  