// as we store the data in the mongodb database the mongodb attach  an  underscore_id with that data 

class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username is ${this.username}`)
    }

    // functionlaity => as the user create it get attach an id for the unique indentification
    // create_id(){
    //     return `123_`
    // }
    static create_id(){
        return `123_`
    }//this will not give the access of the id to the aanya user
}

// const aanya=new user("aanya")
// const user_1=aanya.create_id()
// console.log(user_1)
// some time we don't want to give the access of this id to  few instances of object that is originated form that object
// for this purpose we have to use "static" prior to the create_id 


class teacher extends user {
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone=new teacher("iphone","iphoen@gmail.com")
iphone.logme();
console.log(iphone.create_id())// here if static keyword is used then it can't be accessed by the child as well as the  instances of the object
