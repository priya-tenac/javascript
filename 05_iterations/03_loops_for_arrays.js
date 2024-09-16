// for of loop for array
//["","",""]
//[{},{},{}]

 const arr=[1,2,3,4,5]
  for (const num of arr) {
    // console.log(num)
    
  }// there is no need of increment of the iteration num as for_of  itself increment the value of the varibale which is used to iterate the array
  
  // for of function is for string
  const greetings="hello world!"
//  for(const greet of greetings)
//  {
    
//     if (`${greet}`==" ") {
//         continue;
      
//     }
//     else
//     // console.log(`each char is ${greet}`)
//  }


// map
// map remember the order of the key
// maps are known as for its unique value

 const map=new Map()
 map.set('in',"india")
 map.set('usa',"united state of america")
 map.set('fr',"france")
 map.set('in',"india")
//  console.log(map);
for (const key of map) {
  // console.log(key);
 
}
for (const [key,value] of map) {
  // console.log(key,':-', value);
  
}

// const my_object={
//   'game1': 'NFS',
//   'game2': 'garina',
//   'game3':'pubg'
// }
const my_object={
  game1: 'NFS',
  game2: 'garina',
  game3:'pubg'
}
for (const [key,value] of my_object) {
  console.log(key,':-',value);
  
}
// object can't be iterate by this method