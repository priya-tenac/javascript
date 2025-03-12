// constructor call is done as the object is initialized from the class . and object initialization is done with the help of new keyword
 class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abcde`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
 }
 const chai=new user("chai","chai@gamil.com","1235434")
 console.log(chai.encryptPassword());
 console.log(chai.changeUserName());
 // BEHIND THE SCENE(when there  is no concept of the of classes in the js)
function user(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    }
user.prototype.encryptPassword=function(){
     return `${this.username.toUpperCase()}`
}    
user.prototype.changeUserName=function(){
    return `${this.username.toUpperCase()}`
}
const tea=new user("tea","tea@gamil.com","1235434")
console.log(tea.encryptPassword());
console.log(tea.changeUserName());
















