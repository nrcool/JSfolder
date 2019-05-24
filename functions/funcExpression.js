function sayHi(){
console.log("HI");
}

sayHi();

let myFunction= sayHi;

myFunction();

let square= function(number){
    let result=number*number;
    console.log(result);
};

square(5);

const age=45;

let welcome= (age<=18)?
function(){console.log("hello");}:
function(){console.log("Welcome");};

welcome(24);


const returnvalue=function(){

    return 4+5;
};

console.log(returnvalue());


let obj={};
let array=[3,7,4,6,9,0,3,2];
var element = {}, cart = [];
function Constructor(key,value){
    this.key=key,
    this.value=value
}
function createObj(){
    for(let i=0;i<array.length;i++){
        let key=(`v${i}`);
        console.log(key);
        element.key = key;
        element.value = array[i];
        cart.push(element);
        console.log(cart);



      /*   let ob=new constructor(key,array[i]);
        obj.push({ob.key:ob.value);
       key=array[i]; */
       console.log(key);
    }
}
createObj();
