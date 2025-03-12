// call ,bind, apply

// whenever a function is called inside another function => there will different execution calls inside the function for different call
// but inside function doesn't contains any reference for the parent function
// in that case => in the console this point he window object but in case  of the node it points the empty object rather than window object 


function setUserName(username){
    //complex db calls
    console.log("called")
    this.username=username
}
 function createuser(username,email,password){
    // setUserName(username)// here the function is called but the reference of the this function is not hold inside the outer function ,called this function popped off from the stack and it doesn't hold the refernece of the outer function
    // hence output as username is not shown here => we use ".call" method to hold the reference of that function
    // setUserName.call(username);// here we have to pass the "this argument " as to provide the refenece to the other function
    setUserName.call(this,username)
    this.email=email;
    this.password=password;
 }
 const chai=createuser("aanya","aanya@google.com","1234")
 console.log(chai)