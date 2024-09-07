//here the date base is taken as 1st of jan 1970, from there date is measured in miliseconds



// let my_date=new Date()
// console.log(my_date)
// console.log(my_date.toString())
// console.log(my_date.toDateString())
// console.log(my_date.toISOString())
// console.log(my_date.toJSON())
// console.log(my_date.toLocaleDateString())
// console.log(my_date.toLocaleString())
// console.log(typeof my_date)


// in js month start from the 0th index


// initialization of date by own

// therer are several ways to declare the date in js
let created_my_date= new Date(2024,8,7,1,0);
// let created_my_date= new Date(2024,0,15,5,3);
// let created_my_date= new Date("2024-01-15");
// let created_my_date= new Date("2024-00-15");// this will give error as we here declare date by using hyphen then we have to initilize month start form 01 rather than 00
// let created_my_date= new Date("07-09-2024");// this is mm/dd/yy format of date
// console.log(created_my_date.toDateString());
// console.log(created_my_date.toLocaleDateString());
// console.log(created_my_date.toLocaleString());


//time stamp in the date

// let my_time_stamp=Date.now()
// // console.log(my_time_stamp)
// // console.log(created_my_date.getTime())

// console.log(Date.now())//
// console.log(Date.now()/1000)//convert it miliseconds to seconds
// console.log(Math.floor(Date.now()/1000))// convert it into second and round of to take its smallest integer value



let new_date=new Date();
console.log(new_date);
// console.log(new_date.getDate())
// console.log(new_date.getDay())
// console.log(new_date.getMonth())// here month start from the 0th index rather than 1st index
// console.log(new_date.getMonth()+1)// takes month starting from the 1st index

console.log(new_date.toLocaleString('default',{weekday:'narrow',
    timeZoneName:''}))
console.log(new_date.toLocaleString('default',{weekday:'short'}))
console.log(new_date.toLocaleString('default',{weekday:'long'}))
