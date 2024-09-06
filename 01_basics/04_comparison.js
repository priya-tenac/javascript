// console.log(2>1)
// console.log(2>=1)
// console.log(2==1)
// console.log(2<1)
// console.log(2!=1)

// console.log("2">1);
// console.log("02">1)


/*
 the reason is that equality check ==  and comaprisons > < >= <= work differently
 comparisons convert null to a number and treating it as 0
 */
// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)


// console.log(undefined>0)
// console.log(undefined==0)
// console.log(undefined>=0)

// strict check => this check value as well as datatype of value
//=== 
console.log("2"===2)
console.log("2"==2)