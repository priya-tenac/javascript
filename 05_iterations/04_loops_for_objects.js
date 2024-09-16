const my_object={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

 for (const key in my_object) {
   
    // console.log(key);
    // console.log(my_object[key])
    // console.log(`${key} stands for ${my_object[key]}`)
 }
 const programming=["js","rb","py","java","cpp"]
 for (const key in programming) {
//   console.log(key);
//   console.log(programming[key])
 }  

 const map=new Map()
 map.set('in',"india")
 map.set('usa',"united state of america")
 map.set('fr',"france")
 map.set('in',"india")

 for (const key in map) {
  console.log(key)// nothing output
 }// this is not iterable