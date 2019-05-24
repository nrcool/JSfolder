
function myFunc(){
    console.log("print text using function");

}
printMsj();
function printMsj(){
    let mymsj="hello world!";
    console.log(mymsj);

}
myFunc();

function squareroot(number=3,number1=5){
let squareroot = number * number1;
console.log(squareroot);
}
squareroot(undefined,6);

function loop(num){
    for(let i=0;i<num;i++){
        console.log(i+" Message");
    }
}
loop(4);

function calcage(yearofbirth){
    let age=2019 - yearofbirth;
    console.log(age);
}

calcage(1983);