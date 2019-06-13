// resursion function

let counter=10;

while(counter>0){
    console.log(counter);
    counter--;
}
//output 10--1;
console.log("recursion fucntion")

let countdown=function(value){
    if(value>0){
        console.log(value);
        return countdown(value-1);
    }else{
        return value;
    }
};
countdown(10);

//factorial

let factorial=function(number){
    if(number <=0){
        return 1;
    }else{
        return (number*factorial(number-1));
    }
};

console.log(factorial(10));
console.log(factorial1(10));