const my_number=[1,2,3,4,5,6,7,8,9,10]

//  const new_nums=my_number.map((num)=>num+10)
//  console.log(new_nums);

//chaining
 
const new_number=my_number
           .map((num)=>num*10)
           .map((num)=>num+1)
           .filter((num)=>num>=40)
console.log(new_number)