const userEmail=[]// truthy value
if(userEmail){
    // console.log("got user email");
}
else
{
    console.log("don't have user email.")
}
// falsy value
//false,0,-0,BigInt 0n,"",null,undefined,NaN
// truthy value
//"0",'false'," ",[],{},function(){}


//  if(userEmail.length===0){
//     console.log("array is empty.")
//  }

const emptyobject={}
// this will return an array even though it is an object
if(Object.keys(emptyobject).length===-0){
    // console.log("it is empty object ")


}
// NULLISH COALESCING OPERATOR(??): null undefined


  let val1;
//   val1=5??10
//   val1=null??15
// val1=undefined??45
val1=null??19??87
//   console.log(val1)

 // ternary operator
// syntax for ternary operator
// condition ? true : false
const ice_tea_price=60
ice_tea_price>=80 ? console.log("hello! weelocme to ur own kingdom") : console.log("hey! the tenacious one, how's your day today?")