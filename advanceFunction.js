//#1 Create a one line function that adds adds two parameters

let sum= (a,b)=>a+b;

//Closure: What does the last line return?

const addTo=x=>y=>x+y;
var addToTen = addTo(10);
addToTen(3);                            /*output is  13  */

//Currying: What does the last line return?

const sum2 = (a,b)=>a+b;
const curriedSum2 = (a)=>(b)=> a+b;
curriedSum(30)(1);                         /*output is  31  */

//Currying: What does the last line return?

const sum3 =(a,b)=>a+b;
const curriedSum3 = (a)=>(b)=>a+b;
const add5 = curriedSum3(5);
add5(12);                                   /*output is  17  */

//Composing: What does the last line return?

const compose = (f,g)=>(a)=>f(g(a));
const add1= (num)=>num+1;
const add5= (num)=>num+5;
compose(add1, add5)(10);                 /*output is  16  */
compose(add1, add5)(50);               /*output is  56  */

