class user{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    // get password(){
    //     return this.password.toUpperCase()
    // }
    // set password(value){
    //     this.password=value.toUpperCase()
    // }
    // this is the problem we encounter here => RangeError: Maximum call stack size exceeded(as setting of the value is done two times 1)constructor 2)set
// here password is set by getter setter,constructor don't set the password here
// get password(){
//     return this._password.toUpperCase()
// }
// set password(value){
//     this._password=value.toUpperCase()//save value in the data base or anywhere we will set the value in the uppercase
// }
// the password value set will be the same but when it access it will be accessed in the uppercase
// get password(){
//     return this._password.toUpperCase()
// }
// set password(value){
//     this._password=value
// }

get password(){
    return `${this._password}savya`
}
set password(value){
    this._password=value
}
get email(){
    return this._email.toUpperCase()
}
set email(value){
     this._email=value
}

}
// getter and setter in the class is use to restrict the access of some data to the accesser
// getter and setter is used with the property of the object
const aanya=new user("hey@google.com","1234abc");
// console.log(aanya)
console.log(aanya.password)
console.log(aanya.email)