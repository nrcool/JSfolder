//high order functions
//MAP.

let arr=[1,2,3,4];
let squareArr=arr.map(num=>num**2);
console.log(squareArr);

arr.map(num=>{
    console.log(num+2)});


function MapMethod(){
    return arr.map(num=>num*2);
}

console.log(MapMethod());

let numArr=[1,4,9];
let doubles=numArr.map(function(num){
    return num*2;
});
console.log(doubles);

let lengths=["john","Tom","harry"].map(item=>item.length);
console.log(lengths);


let newArray=[
    {key:1, value:10},
    {key:2, value:20},
    {key:3, value:30}

];

//using Map to reformated object parameters in an array

let reformatedArray=newArray.map(objectParam=>{
    let newobject={};
    newobject[objectParam.key]=objectParam.value;
  return newobject; 

});
console.log(reformatedArray)