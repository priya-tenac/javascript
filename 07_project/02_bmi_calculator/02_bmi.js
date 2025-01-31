const form=document.querySelector('form')
//this usecase will give empty
//const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault();// This will stop the default behaviour of the form submission to the server

    const height=parseInt(document.querySelector('#height').value);

    const weight=parseInt(document.querySelector('#weight').value);
    const results= document.querySelector('#results');
     if(height===''||height<0||isNaN(height)){
        results.innerHTML=`please give valid height ${height}`;
     }
     else if(weight===''||weight<0||isNaN(weight)){
        results.innerHTML=`please give valid weight ${weight}`;
     }
     else{
        const bmi =(weight/((height*height)/1000)).toFixed(2);
     }
     //show the result
     results.innerHTML=`<span>${bmi}</span>`
})