// function definition

// function say_my_name(){
//     console.log("p")
//     console.log("r")
//     console.log("i")
//     console.log("y")
//     console.log("a")
// }
//say_my_name=> function reference
// say_my_name()// function execution/function call
// function add_two_numbers(number1,number2){
//     console.log(number1+number2)
// }
// // add_two_numbers(4,5);
// // add_two_numbers(7,"a")
// // add_two_numbers(2,"6")
// // add_two_numbers(8,null)
//  const result=add_two_numbers(5,5)
//  console.log(`the result is: ${result}`)//what add_two_numbers return  in the after execution program=> this will give undefined , that means it doesn't return anything


// function add_two_numbers(number1,number2){
// let result=number1+number2
// return result
// console.log("priya")
// }

// function add_two_numbers(number1,number2){
//  return number1+number2
// }


//  const result=add_two_numbers(5,5)
//  console.log(`the result is: ${result}`)//what add_two_numbers return  in the after execution program=> this will give undefined , that means it doesn't return anything

// function login_user_message(user_name){
//     return `${user_name} just logged in.`
// }
// // //  login_user_message("priya");
// console.log(login_user_message("priya"));
// console.log(login_user_message())// when there is nothing is passed in the argumenets then it will give undefined in the output

// function login_user_message(user_name){
//     if(user_name===undefined){
//         console.log("please enter a user name.")
//         return;
//     }
//     return `${user_name} just logged in.`
// }
// console.log(login_user_message());
// in js , ""(empty string ),undefined are treated as false value in the js
// function login_user_message(user_name){
//     if(!user_name){
//         console.log("please enter a user name.")
//         return;
//     }
//     return `${user_name} just logged in.`
// }
// console.log(login_user_message());


// give dafault parameter to the user in case argument is not given the default parameter is treated as argument
// function login_user_message(user_name="ABCD"){
//     if(!user_name){
//         console.log("please enter a user name.")
//         return;
//     }
//     return `${user_name} just logged in.`
// }
// console.log(login_user_message());

// console.log(login_user_message("savya"));



// when the number of arguments are not fixed in the function=> USE OF "REST OPERATOR"

// function calculateCartPrice(...num){
//     return num;
// }
// console.log(calculateCartPrice(100,200,300));


function calculateCartPrice(val1,val2,val3,...num){
    return num;
}
// console.log(calculateCartPrice(1000,2000,3000));// this will give empty array because all the arguments are stored in the variable given hence num array gets no value hence this give empty array as output
// console.log(calculateCartPrice(100,290,300,400,500,13323,233,));// first three argument is given to the first three parameter
//  and remaining arguments are stored in the  num parameter


 // how to pass an object ar parameter in the function
const user={
    name:"savya",
    price:199
}
 function handle_object(anyobject){
    // console.log(`username is ${anyobject.name} and the price of the course is ${anyobject.price}.`)
 }
//   handle_object(user);
handle_object({
    name:"sam",
    price:999
})
// how to pass an array as parameter  of the function
const new_array=[100,200,300,400,500];
// function return_second_value(get_array){
// //   return get_array
// return get_array[3]
// }
// console.log(return_second_value(new_array))


function return_second_value(get_array){
    //   return get_array
    return get_array[5]
    }
console.log(return_second_value([100,200,300,400,500,600,700]))

// +++++++++++++++++++++++++++++++++++SCOPE