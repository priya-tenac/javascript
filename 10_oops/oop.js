// //============================object literals
// const user={
//     username:"anaya",
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function(){
//         console.log("hey! i am living my dreamy world.")
//         console.log(`username is ${this.username}`)
//         console.log(this)
//     }
// }
// console.log(user.username);
// // console.log(user.getUserDetails());
// console.log(this)// this will give emepty object(global object in the node environment) but we we execute this in the browser console it will give the "window object"
//===============================constructor

// const promiseOne=new Promise()// here new is the constructor function which is used to create the  multiple instances from a single object literals
// const date=new Date()

function user(username,loginCount,isloggedIn){
    this.username=username;
    //this.myusername=username;
    this.loginCount=loginCount;
    this.isloggedIn=isloggedIn;
    this.greeting=function(){
        console.log(`welcome to the world of ${this.username}`)
    }

    // return this
}
/*
// const userOne=user("anaya",12,true)
// const userTwo=user("rohit",14,false)
// console.log(userOne)//=> this usertwo will override the value of the userone value even userone is  being called.
// for overcoming such kind of problem we have to use constructor function "new"
*/
// when we use new keyword then there is no need to use the "return this " line it will work properly without this line
// const userOne=new user("anaya",12,true)
// const userTwo=new user("savya",2,false)
// console.log(userOne);

// console.log(userTwo)
/*

callouts about new keyword
1)new object creation
whenever we write new keyword=> an empty object is created which is known as instance=>new object creation
2)constructor function call occur due to new keyword
it will give the argument
3)due to this keyword argument is injected inside this object created
4)we'll get the argument inside the function
 */
const userOne=new user("anaya",12,true)
console.log(userOne.constructor)// this will give the refernece about itself
// instanceof