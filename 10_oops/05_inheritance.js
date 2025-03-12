class user{
    constructor(username){
        this.username.username
    }
    logme(){
        console.log(`username is ${this.username}`)
    }
}
 class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addcourse(){
        console.log(`new courses are added by the ${this.username}`)
    }
 }

 const chai=new teacher("chai","chai@gmail.com","12324")
chai.logme();
 chai.addcourse();


 const masalachai=new user("masalachai")
 masalachai.logme()
 masalachai.addcourse()// here masalachai doesn't have the access of the addcourses
 console.log(chai===masalachai);// this will give the fasle output
 console.log(chai===teacher)// this will give the false output because chai is the instance of teacher object
 console.log(chai instanceof teacher)// this will give the "true "output
 console.log(chai instanceof user)// this will give the true output