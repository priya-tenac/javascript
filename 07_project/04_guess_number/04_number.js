const  random_number=parseInt(Math.random()*100+1);
const submit=document.querySelector('#subt')
const inputUser=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrhi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');
  
const p=document.createElement('p');
 let prevGuess=[]
 let numGuess=1;
 let playGame=true;
 if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(inputUser.value);
        console.log(guess);
        validateGuess(guess);
    })
 }
 function  validateGuess(guess){
// this function validate the input from the user
     if(isNaN(guess)){
        alert('please enter a valid number')
     }
     else if(guess>100){
        alert('please enter a valid number')
     }
     else{
        prevGuess.push(guess);
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`game over. random number was ${random_number}`)
        }
     }
 };
 function checkGuess(guess){
  // whether the given value is equal to the random value
 };
 function displayGuess(guess){
    // display the message on the basis of the output comes from the function checkGuess

 }
 function displayMessage(message){
// this message will interact with DOM only
 };
 function endGame(){

 }
 function newGame(){

 }