// 1) array copies  are the shallow copy=> shallow copies is the copies whose property share the same refernce point i.e. when we change
// in any property then it'll reflect in the original copies
//2) arrays in js is reisizable and it can store multiple datat type in the same array unlike  arrays in cpp/c

const my_arr1=[9,122,3,4,-1]
// console.log(my_arr1)
// console.log(my_arr1[0])
// const my_arr2=new Array(1,2,3,4,5,6)
// console.log(my_arr2)

// ARRAYS' METHODS

// my_arr1.push(9);
// console.log(my_arr1)
// my_arr1.push(10);
// console.log(my_arr1);
// my_arr1.pop()
// console.log(my_arr1);
// my_arr1.unshift(9999);// unshift is used to insert an element in the starting of the array
// console.log(my_arr1)
// my_arr1.shift();//shift is used to pop element from the starting of the array
// console.log(my_arr1)
// console.log(my_arr1.includes(9))
// console.log(my_arr1.indexOf(9999))
// console.log(my_arr1.indexOf(122));

// const new_arr=my_arr1.join()// join is used to convert a array into string
// console.log(new_arr)
// console.log(typeof new_arr)


// SLICE AND SPLICE IN THE ARRAY

console.log("A ",my_arr1)
const my_new_arr=my_arr1.slice(1,3);
console.log(my_new_arr)
console.log("B ",my_arr1)
const my_new_arr2=my_arr1.splice(1,3);
console.log(my_new_arr2)
console.log("C ",my_arr1)
