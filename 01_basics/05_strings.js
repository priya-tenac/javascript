const name="priya "
const repo_count=50
//  console.log(name+repo_count+" value")

//backtick  is used for string interpolation i.e. backtick=> palceholder
/*
In JavaScript, interpolation is the process of inserting strings or
 values into an existing string for various purposes
*/
// console.log(`my name is ${name} and my repo_count is ${repo_count} .`)
// another method of declaration of the string using new keyword
// whenever there is new keyword  used in js then  new keyword signifies object
// here string is an object


const game_name=new String('free_fire')
//console.log(game_name)
//console.log(typeof game_name)
// here type of game_name is object rather than array
//console.log(game_name[4])
//console.log(game_name.__proto__)
//console.log(game_name.length)
//console.log(game_name.toUpperCase())// HERE WE DON'T CHANGE THE ORIGINAL VALUE AS IT IS STORED IN THE HEAP AS IT COPIED VALUE IS TAKEN
//console.log(game_name.charAt(6));
//console.log(game_name.indexOf('i'));

//  const car_name=new String ("bugatti-chiron")
//  const newString=car_name.substring(0,4);
//  console.log(newString);
//  const another_string=car_name.slice(-5,4);
// slice can accept negative argument  in order to take element from the reverse order 
// substring can't take negative elements as arguments
//  console.log(another_string);

//  const one="  priya  ";
//  console.log(one);
//  console.log(one.trim());// trim is used to remove the extra space from the string


// const url="https://lco.com/lco%20abcde"
// console.log(url.replace('%20','-'));
// console.log(url.includes('abcde'));

// convert string into array based on something(like "-",",", and so on)

console.log(game_name.split('_'))