/* default Binding..
implicit binding--
explicit binding---
new binding --- */


 /*   let a=10; */
   //default binding

/* function foo(){
"use strict" //stopping strick binding
    console.log(a)
}

foo(); */

//implicit binding

/*  function foo(){
    console.log(this.a);
}
let obj={
    a:2
}
foo.call(obj); */

//call accept (this,arg1,arg2,arg3...);

/* let foo1=foo.bind(obj);
foo1(); */
//bind return you binded function;


/* function foo2(){
console.log(this.a)
}

function doFoo(){
    foo2()
}
let obj={
    a:2,
    foo2:foo2
}
a="oops,Global";

doFoo(obj.fo02) */


//explicit bind

/* function foo3(){
    console.log(this.a)
}
let obj={
    a:20
}

foo3.call(obj);

function foo4(){
    console.log(this.a);
}
let obj2={
    a:2
}
let bar2=function(){
    foo3.call(obj2);
}
bar2(); */

//new binding
/* function foo5(a){
this.a=a;
}

let bar=new foo5(2);//instance of foo5
console.log(bar)//foo5 { a: 2 }
console.log(bar.a);


function Car(maxspeed){
this.maxspeed=maxspeed;
}
let fastcar=new Car(200);
let slowcar=new Car(80);

console.log(fastcar);//Car { mxs: 200 }
console.log(slowcar);//Car { mxs: 80 } */


//implicit binding ........................

/*  
function foo(){
    console.log(this.a+ this.b)
}
let obj={
    a:2,
    b:50,
    foo:foo
};

a=30;
b=50;
obj.foo();

function foo2(){
    console.log(this.a);
};
let obj3={
    a:100,
    key2:foo2
}
let obj4={
    a:1,
    obj3:obj3,
    obj:obj3.key2
}

obj4.obj();  */


function a(){
    console.log(this);
}
a(); 
