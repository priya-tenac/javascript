// consumption of promise 
//fetch('<url_link>').then().catch().finally()
//creation of the promise
//callback hell=> multiple nested callback
// const promiseOne=new Promise(function(resolve,reject){
//     //do async task=>db calls,cryptography related,network calls,
//     setTimeout(function(){
//         console.log('async task is completed');
//         resolve();
//     },1000)
// })

// //cosumption of promise
// promiseOne.then(function(){
//     console.log("Promise consumed");
// })
//===================================

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log('promises consumed')
})
// //===========================
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
  resolve({username: "chai",email: "chai@example.com"})
    },1000)
})
promiseThree.then(function(user)
{
  console.log(user);
})
//=======================
const promiseFour=new Promise(function(resolve,reject){
  setTimeout(function() {
    let error=true
    if (!error) {
        resolve({username:"anaya",password:"12345"})
    }
    else{
        reject('error: something went wrong')
    }
  }, 1000);
})
promiseFour.
then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("the promise is either resolved or rejected.")
})
//========================================
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error)
        {
            resolve({username:"javascript",password:"1223456"})
        }
        else{
          reject('error: js went wrong')
        }
    },1000)
})

async function consumePromiseFive ()
{
   try {
    const response= await promiseFive
   console.log(response)
   } catch (error) {
    console.log(error);
   }
}
consumePromiseFive()
//=============================


// async function getallusers(){
//    const response= await fetch('https://jsonplaceholder.typicode.com/users')
//    const data=response.json()
//    console.log(data); 
// // }
// ======>
async function getallusers(){
 try {
    const response= await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(response)
    const data= await response.json()
    console.log(data);  
 } catch (error) {
    console.log("error: ",error)
 }
 }
getallusers()
//====================================


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error)
})

























