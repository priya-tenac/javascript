// javascript execution context
//whenever there is execution of javascript then there is always a execution done which is global execution context
// this global execution conntext is stored in the " this " variable
// this variable refer to the global execution context
// javascript is single threaded
// all this execution is done on single thread
// there are three types of execution context
// 1)global  ec  2)function/functional ec 3)eval execution context(eval execution context is the property of global objects)
// there are two phase in which execution of javascript is done
//1)memory creation phase/ creation phase   2)execution phase



 let val1=10
 let val2=5
 function addnum(num1,num2){
 let total=num1+num2
  return total
  }

   let result1=addnum(val1,val2)
   let result2=addnum(10,2)

// complete steps for execution of above program
//steps
//1)global execution/global environment
    // firstly execution of global execution is done and global execution is allocated to the "this" keyword
//2)memory creation phase
        // completion of first cycle
                   // val1->undefined
                   // val2->undefined
                   //addnum->definition
                   //result1->undefined
                   //result2->undefined
//3)execution phase
  //                 val1<-10
  //                 val2<-5
 //                  addnum->the new sand box created whenever  function call is done.this sand box contains(new variable environment + execution thread) 
//                  this sand box contains memory phase and execution phase
//                  result1<-15(after returning the function)
//    for this sand box
//              1)memory phase
//                       val1->undefined
//                       val2->undefined
//                       total->undefined
//              2)execution context
//                       num1<-10
//                       num2<-5
//                       total<-15// this total value is returned to the global execution context(parent execution)
//               ****this above sand box is deleted after work is done.
// now new sand box is created which contains (new varibale environment+thread)
//              1)memory phase
//                       val1->undefined
//                       val2->undefined
//                       total->undefined
//              2)execution context
//                       num1<-10
//                       num2<-2
//                       total<-12
/*++++++++++++++++++++++   call_stack  +++++++++++++++++++++++++*/

