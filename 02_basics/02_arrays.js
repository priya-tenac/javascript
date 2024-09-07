const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","spiderman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1]);
// const heroes=marvel_heroes.concat(dc_heroes);
// console.log(heroes);
const all_heroes=[...marvel_heroes, ...dc_heroes]
// console.log(all_heroes);
const another_array=[1,2,,[4,5,6],7,[8,[9,10,[11,12]]]]

const real_another_array=another_array.flat(Infinity);// flat accepts an argumnents which will give the depth at which we have to concate the array

// console.log(real_another_array);

console.log(Array.isArray("Priya"))
console.log(Array.from("priya"))
console.log(Array.from({name:"priya"}))//interest
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));

