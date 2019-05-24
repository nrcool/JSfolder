let sum=(a,b)=>a+b;
console.log(sum(8+6));
let age=20;
let welcome=(age<20)?
name=>console.log("welcome " + name):
name=>console.log("hello "+ name);

welcome("naqvi");

let welcome1=(age<20)?
(first,last)=>console.log(`welcome   ${first} ${last}`):
(first,last)=>console.log(`hello ${first} ${last}`);

welcome1("naqvi","raza");

let squareroot= number=> number*number;

console.log(squareroot(6));