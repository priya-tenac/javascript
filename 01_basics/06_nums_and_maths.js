const score=400
// console.log(score);

const balance =new Number(100)

// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2))

 const other_number=123.9876
//  console.log(other_number.toPrecision(5));
//  console.log(other_number.toPrecision(2));
  //  to pricision value return a value which is string rather than a number and it will give priority to the left side value of the decimal of number


//    const hundreds=1000000000
//    console.log(hundreds.toLocaleString());
   // tolocalestring is used  the basis of us representation of a number 
//    console.log(hundreds.toLocaleString('en-IN'))


//++++++++++++++++++++++++++++++++++++++++++++++++++++    MATHS      +++++++++++++++++++++++++++++++++++++++++++++++++


//  console.log(Math);
//  console.log(Math.abs(-9))
//  console.log(Math.round(4.5))
//  console.log(Math.round(4.3))
//  console.log(Math.round(4.8))
//  console.log(Math.round(7.5))
//  console.log(Math.floor(4.3))
//  console.log(Math.ceil(4.3))
//  console.log(Math.min(1,2,3,4,5,6,7,8))
//  console.log(Math.max(9,8,7,6,1,2,3))


// console.log(Math.random());// this random function values lies in the range 0 to 1(excluding 1)
// console.log(Math.random()*10)
// console.log(Math.random()*10+1)// this is used to avoid the value which is start from zero// minimum value in this case must be 1 
// console.log((Math.random()*10)+1)// this is done to to ease the bodmas process
// console.log(Math.floor(Math.random()*10)+1)

 const min=10
 const max=20
 console.log(Math.floor(Math.random()*(max-min+1))+min)
 // "+1" is used to avoid 0 value and min is added to get the minimum value as 10