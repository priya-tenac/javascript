// const coding =["js","ruby","java","python","cpp"]

// const value=coding.forEach((item)=>{
//     console.log(item)
//     return item
// })
// console.log(value)

// for_each function never return any value



const my_number=[1,2,3,4,5,6,7,8,9,10]
//filter take callback as argument inside it and it can return value
// const number=my_number.filter((num)=>num>4)//(implicit return)
// console.log(number)


// for explicit return
// const nums=my_number.filter((item)=>{item>5})// this will give empty array as it is within the curly braces hence we have to explicit write to return
// const nums=my_number.filter((item)=>{
//      return item>5
//     })
// console.log(nums)


const new_nums=[]
my_number.forEach((num)=>{
    if(num>4)
    {
        new_nums.push(num)
    }
})

// console.log(new_nums)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')
//   console.log(userBooks)
  let userBooks_4=books.filter( (bk) => {  return bk.publish > 1995 && bk.genre === 'History'})
  console.log(userBooks_4);
  