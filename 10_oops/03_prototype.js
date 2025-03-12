let myname="Priya   ";
// console.log(myname.length);
// console.log(myname.trim().length);
// now create a function which is used to find the true length without using trim function which is applicable for any strings
// we want to create a method using prototype

let myheroes=["thor","spiderman"]
let heropower={
    thor:"hammer",
    spiderman:"sling",
    get_spider_power: function(){
        console.log(`spidey power is ${this.spiderman}`);
    }
}

//A factory function in JavaScript is a function that returns an object without using the new keyword. It is a common way to create multiple instances of objects with shared properties and methods.
Object.prototype.aanya=function(){
    console.log(`aanya function is present in all object`);
}
// heropower.aanya()
// myheroes.aanya()

Array.prototype.heyarr=function(){
    console.log(`hey this is method that is generated from the prototype of the array`);
}
myheroes.heyarr();
// heropower.heyarr();// here the method which is generated from the array protoype is not applicable with the higher order i.e. with object as it gives error with object
// here method is not shared with sibling also

// INHERITANCE

// this is what protoyple inheritance
const user={
    name:"chai",
    email:"chai@google.com",
}
   
const teacher={
    makevideo:true,
 }
 const teaching_support={
    isAvailable:false
 }
//  const TAsupport={
//     makeAssignment:'js assignment',
//     fulltime:true,
//  }
 // every object is an instance in itself=> they can't share their property except default property beacause every object is an instance itself
  // when we want to link the two object we use prototype to link the two object
  // __proto__ is used to link the two separate object 

  const TAsupport={
    makeAssignment:'js assignment',
    fulltime:true,
    __proto__:teaching_support
 }
 teacher.__proto__=user
 // modern syntax to use the link the two object
 Object.setPrototypeOf(teaching_support,teacher);// here access the property of the teacher by the teaching_support

 let another_user_name="chaiaurcode  ";
 String.prototype.trueLength=function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);// this will give the "undefined as the there is no access of name here"
    console.log(`true length is :${this.trim().length}`);
 }
 another_user_name.trueLength()
 "aanya".trueLength();
 "sanaya".trueLength();
 // here this will reference the variable name and truelength will give the output