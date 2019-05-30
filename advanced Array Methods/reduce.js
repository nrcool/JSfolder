//high order Function 
//Reduce

let array=[1,2,3,4,5];

const sumReducer=array.reduce((accumulator,currentvalue)=>accumulator+currentvalue)//require atleast two parameters (accumulator,currentvalue,currentindex,array)and can pass third parameter(value of accumulator);
console.log(sumReducer);

const sum2=((sum,num)=>sum+num);

console.log(array.reduce(sum2,5));

let resulT=array.reduce((sum,num)=>sum+num,2);
console.log(resulT);

const reducer=function(accumulator,currentvalue,currentindex,array){
    console.log("ACC ",accumulator," Currentval ",currentvalue," currIndex ",currentindex," array ",array);
    console.log(accumulator)
    return accumulator+currentvalue;
};

array.reduce(reducer);
