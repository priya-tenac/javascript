// object through constructor
//singleton

// const tinderUser =new Object()
const tinderUser={}// this 1 and 2 declaration is same => give empty object {} as output
 tinderUser.id="123abc"
 tinderUser.name="sammy"
 tinderUser.isloggedin=false
// console.log(tinderUser);


 const regular_user={
    email:"some@gogle.com",
    full_name:{
        user_full_name:{
            first_name:"savya",
            last_name:"chauhan"
        }
    }
 }
//  console.log(regular_user)
//  console.log(regular_user.full_name);
//  console.log(regular_user.full_name.user_full_name)
//  console.log(regular_user.full_name.user_full_name.last_name)
// console.log(regular_user.full_name?.user_full_name.first_name)// here ? is used because it check if full_name exist then print the output


// merging of the objects
 const obj1={1:"a",2:"b"}
 const obj2={3:"m",4:"n"}
const obj3={...obj1,...obj2}
console.log(obj3)
const obj4={obj1,obj2}
console.log(obj4)
const obj5=Object.assign(obj1,obj2)
const obj6=Object.assign({},obj1,obj2);// {}=> target and other objects are act as sources
console.log(obj5)
console.log(obj6);