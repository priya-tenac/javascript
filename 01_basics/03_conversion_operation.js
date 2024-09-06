// let score ="33"
// console.log(typeof score)
// console.log(typeof(score))
// let valueInNumber=Number(score)
// console.log(typeof valueInNumber)

// let score ="33abcd"
// console.log(typeof score)
// console.log(typeof(score))
// let valueInNumber=Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)
// when there is string in which is the combination of integer and alphabets , when we convert that string to a number then it is convertible
// to a number but it's value is NaN(not a number)

// let score =null
// console.log(score);
// console.log(typeof score)
// let valueInNumber=Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)
//
 /*
 null=> data_type ---objects
 when null is converted into number then its value become 0 and its data_type is number rather then object
 */


//  let score =undefined;
// console.log(score);
// console.log(typeof score)
// let valueInNumber=Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)
// after conversion of undefined into a number its datatype becomes number and its value becomes not a number



// let score =true;
// console.log(score);
// console.log(typeof score)
// let valueInNumber=Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)


// let score ="priya";
// console.log(score);
// console.log(typeof score)
// let valueInNumber=Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)


 //when there exist a value such that it doesn't convertible into a number then its value becomes NOT A NUMBER but its datatype is still a number



 // CONVERSION OF BOOLEAN VALUE(0/1) TO BOOLEAN VALUE(TRUE/FALSE)
//   let isLoggedIn=1
//    let booleanIsLoggedIn=Boolean(isLoggedIn)
//    console.log(booleanIsLoggedIn);

// let isLoggedIn=""
// let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);// this will give false => empty string is treated as 0;
// non empty string is treated as 1 hence its conersion into boolean give true 


//  let score =33
//  let string_number=String(score);
//  console.log(string_number)
//  console.log(typeof string_number)


// ****************************OPERATIONS************************************


// let value=3
// let neg_value=-value
// console.log(neg_value)

//  console.log(2+2)
//  console.log(2-2)
//  console.log(2*2)
//  console.log(2/2)
//  console.log(2**5)
//  console.log(2%3)

//  let str1="hello"
//  let str2=", its me"
//  let str3= str1+str2
//  console.log(str3)

// console.log("1"+2)
// console.log(1+"2")
// console.log("1"+2+2)
// console.log(1+2+"2")


 // AVOID SUCH TYPE OF  TRICKY CONVERSION IN JS
//  console.log(true)// true
//  console.log(+true)// 1
//  console.log(+"")// 0

//avoid such kind of declaration in js
//  let num1, num2,num3;
//  num1=num2=num3=2*5;


//  let game_score=100
//  game_score++;
//  console.log(game_score);
//   let game_score2=100
//  ++game_score2;
//  console.log(game_score2)
