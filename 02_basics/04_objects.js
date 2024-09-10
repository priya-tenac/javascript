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
// console.log(obj3)
const obj4={obj1,obj2}
// console.log(obj4)
const obj5=Object.assign(obj1,obj2)
const obj6=Object.assign({},obj1,obj2);// {}=> target and other objects are act as sources
// console.log(obj5)
// console.log(obj6);
const user=[
    { 1:"a",
        email:"abs@google.com"
    },
    {},
    {

    }
 ]
 user[1].email
//  console.log(tinderUser);
//  console.log(Object.keys(tinderUser))// this will give output as array from the objects
//  console.log(Object.values(tinderUser))
//  console.log(Object.entries(tinderUser))// this will give array within the array as output=> a pair of key and values gives array

//  console.log(tinderUser.hasOwnProperty('isloggedin'))
//  console.log(tinderUser.hasOwnProperty('islogged'))

 // DESTRUCTURING OF OBJECTS
  const course={
    course_name:" javascript",
    instructor_name:"hitesh",
    course_price:"999"
  }

  //course.instructor_name
// when we have to access the same value at multiple time , rather than using "." notation to access the value , use this below method to access the same value at multiple time

// this is desturcturing of the object
//   const{instructor_name}=course
//   console.log(instructor_name);
  // OR
   const{instructor_name:instructor}=course
   console.log(instructor)
   // props of react;
   // props stands for properties which is used to passing thedata from one components to other components

    // const navbar=(props.company)=>{
    // }
    // navbar(company="priya")

    // rahter than use props.company use only company as in the argument in the react => which is destructuring of the object
   // write company as argument , write company within the { } as we destructuring objects
    // const navbar=({company})=>{

    // }
    // navbar(company="savya")
  // in prior time the data comes from the backend in the form of "xml", now to the data comes in the form of "json "  from the backend


  //JSON
  // {
  //   "name":"priya",
  //   "course_name":"js",
  //   "price":"free"
  // }
  // what will happen when the APIs calls are done by JSON
  // how to use "fetch method" in js,use fetch method we call an url to get data
  // APIs data can be  in the form of object{} and some time array, arrays contains objects
  //1) {},  2)  [{},{},{}]