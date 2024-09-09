// there are two methods of declaration of objects
//1) like constructor 2) like literals
// whenever the object declaration is done like constructor, then it is called as "singleton"=> it is single object like its own
// there is no multiple instances of the object whenever it is created using constructor
// there is no formation of singleton when object is created like literals
// Object.create=> this is the constructor method

 //declaration of symbol
 const my_symbol=Symbol("key1")

 
// object literals
 const js_user={
    name:"priya",
    // by default key is treated as string by the system
    age:22,
    [my_symbol]:"unique",
    locations:"bengaluru",
    email:"abc@google.com",
    isLoggedIn: false,
    last_login_days:["monday","saturday"]
 }
//  console.log(js_user.email);
// console.log(js_user["name"])
// whenever the key is defined in the double quotes then . it can't be access with the help of "." method
//  it can only be access with the help of bracket only(square notation),  in the bracket key is called within the double quotes
// console.log(js_user[my_symbol])
// console.log(typeof js_user.my_symbol);// here the data_type is still string , the data_type is not symbol
// if we want that datatype of symbol must show symbol, then  symbol's key must be written in the square bracket
 
// overwrite the value or update the value of any key's value
js_user.email="asdfhgh@google.com";
// console.log(js_user["email"]);
// lock the value of the key so that can't change its value,use "freeze keyword to lock the objects"
// Object.freeze(js_user);
js_user.email="ABDSSFJHh@google.com";
// console.log(js_user);
// in js functionis treated as type 1(first class citizen/first class object)i.e. function can be treated as variables
// function is used with object without freezing the objects
js_user.greeting=function(){
   console.log("hello js user, keep ur coding journey up, hardwork always pays off")
}
// console.log(js_user.greeting)// output=>[Function (anonymous)]=> function doesn't execute it only return
 console.log(js_user.greeting())
js_user.greeting_two=function()
{
   console.log(`hello js user ${this.name}, !great work`);
}
console.log(js_user.greeting_two());// when there is () with the call of function then this is the execution of the function 
// otherwise its only return the function
// this keyword is used when the object refers to the keys of the same object
