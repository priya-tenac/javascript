 const my_number=[1,2,3,4,5]
 const sum=my_number.reduce(function(acc,curr){
    console.log(`acc:${acc},  curr:${curr}`)
    return acc+curr
 },3)


 console.log(sum)