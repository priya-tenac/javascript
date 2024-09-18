const coding=["py","js","cpp","java","riby","swift"]
// forEach is higher order function
// forEach function accept a callback function=> callback function accept any function which doesn't have name
// coding.forEach(function (val){
//     // console.log(val);
// })


// coding.forEach((item)=>{
//     console.log(item)
// })



// function printme(item)
// {
//     console.log(item);
// }
//  coding.forEach(printme)


// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })


 const mycoding=[
    {
        lang_name:"python",
        file_name:"py"   
    },
    {
        lang_name:"javascript",
        file_name:"js" 
    },
    {
        lang_name:"ruby",
        file_name:"rb" 
    }
    
 ]

 mycoding.forEach((item)=>{
    console.log(item.file_name)
    console.log(item.lang_name)
 })