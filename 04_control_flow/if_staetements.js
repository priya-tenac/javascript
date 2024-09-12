// if statement
// syntax=>if(condition){}
if(true){

}
if(false){
}
//<,>,<=,>=,==,!=,===,!==(negaitve sign)


if(2=="2")
{
    // console.log("executed");
}

if(2==="2")
    {
        // console.log(" code executed successfully");
    }
const temperature=41;
if(temperature<50)
{
    // console.log("less than 50")
}
else{
// console.log("temperature greater than 50.")
}

 const score=200
 if(score>100){
    const power="fly"
    // console.log(`user power: ${power}`)
 }
 // short hand notation

 const balance=1000
 // give a semicolon at then end of statement when we give explicit scope
//  if(balance>500)  console.log("test");//implicit scope
//  if(balance>800) console.log("hey! it's me"),console.log("hello! welcome to ur own kingdom.");
if(balance<500)
{
    // console.log("less than 500");
}else if(balance<750)
{
    // console.log("less than 750");
}else if(balance<900){
    // console.log("less than 900"); 

}
else{
    // console.log("less than 1200.")
}

const userloggedin=true
const debitCard=true
const loggedinfromgoogle= false
const loggedinfromEmail=true
if(userloggedin&&debitCard&&loggedinfromgoogle)
{
    // console.log("allow to buy course");
}
if(loggedinfromEmail||loggedinfromgoogle){
    console.log("i am allowed to login on this page.")
}
//* (tokens is given from the server)
 