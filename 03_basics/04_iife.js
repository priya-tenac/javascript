//Immediately invoked function expressions(IIFE)
// (function chai(){
//    console.log(`DB CONNECTED`);
// }())
// syntax for iife =>       (function definition)(execution call)
// advantage of iife
//1) immdiate imvokation after formation of function
//2) to avoid the  problem of pollution causes by the global scope



(function chai(){
   //name iife
   console.log(`DB CONNECTED`);
}());


(()=>{
   console.log(`hey! it's me, welcome to my kingdom`)
 })();
 ((name)=>{
   //un-name iife
   console.log(`hey! welcome to the kingdom of ${name}`)

 })('savya')


