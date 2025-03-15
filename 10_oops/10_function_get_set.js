// function based method to use getter and setter as in the old time there is no class exist in the javascript

function user(email,password)
{
    this._email=email;
    this._password=password

Object.defineProperty(this,'email',{
    get:function(){
        return this._email.toUpperCase()
    },
    set: function(value){
        this._emailemail=value
    }
})
    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password=value
        }

    })


}
const chai=new user("chai@google.com","chai")
console.log(chai.email);