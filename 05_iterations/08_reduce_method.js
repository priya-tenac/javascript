 const my_number=[1,2,3,4,5]
//  const sum=my_number.reduce(function(acc,curr){
//     console.log(`acc:${acc},  curr:${curr}`)
//     return acc+curr
//  },3)


//  console.log(sum)
const total=my_number.reduce((acc,curr)=>(acc+curr),0)

console.log(total)
const shopping_cart=[
   {
      item_name:"js course",
      price:2999,

   }
,
   {
      item_name:"py course",
      price:3999,
      
   }
   ,
   {
      item_name:"mobile dev course",
      price:29999,
      
   }
]
const total_price=shopping_cart.reduce((acc,item)=>(acc+item.price),0)

console.log(total_price)