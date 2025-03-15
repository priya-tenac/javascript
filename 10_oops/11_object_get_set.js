const user={
    _email:'abc@google.com',
    _password:"abcder",
    get email(){
    return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }

}


// use factory function(like object.create)
const tea=Object.create(user)
console.log(tea.email)