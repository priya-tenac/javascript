let random_number=parseInt(Math.random()*100+1);
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
        alert('please enter a valid number.')
     }
     else if(guess>100){
        alert('please enter a number which is less than 100.');
     }
     else if(guess<1){
      alert('please enter a number which is greater than 1.')
     }
     else{
        prevGuess.push(guess);
        if(numGuess===11){
            
            displayGuess(guess)
            displayMessage(`game over. random number was ${random_number}`)
            endGame()
        }
        else{
         displayGuess(guess)
         checkGuess(guess)
        }
     }
 };
 function checkGuess(guess){
  // whether the given value is equal to the random value
  if(guess===random_number){
   displayMessage(`you guess it right`)
   endGame()
  }
  else if(guess<random_number){
   displayMessage(`number is too low.`)
  }
  else if(guess>random_number){
   displayMessage(`number is too high`)
  }
 };
 function displayGuess(guess){
    // display the message on the basis of the output comes from the function checkGuess
  inputUser.value=''
  guessSlot.innerHTML+=`${guess},  `
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`// 10<=> 11
 }
 function displayMessage(message){
// this message will interact with DOM only
    lowOrhi.innerHTML=`<h2>${message}</h2>`;

 };
 function endGame(){
     inputUser.value=''
     inputUser.setAttribute('disabled','')
     p.classList.add('button')
     p.innerHTML=`<h2 id="newGame">start new game </h2>`
     startOver.appendChild(p)
     playGame=false
     newGame();
 }
 function newGame(){
 const newgamebutton= document.querySelector('#newGame')
 newgamebutton.addEventListener('click',function(e){
 random_number=parseInt(Math.random()*100+1)
 prevGuess=[]
 numGuess=1
 guessSlot.innerHTML=''
  remaining.innerHTML=`${11-numGuess}`
  inputUser.removeAttribute('disabled')
  startOver.removeChild(p)
   playGame=true
 })
 }