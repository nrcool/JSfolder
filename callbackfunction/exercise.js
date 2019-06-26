/* Callback
With the snippet of code below, create a function called "each" which accepts two parameters: an array and a callback function. The "each" function should loop over the array passed to it and run the callback function on each element in it. */
// this function should accept 2 parameters, put them in!
function each(arr,callback){
    for(let i=0;i<arr.length;i++){
        callback(arr[i]);
    }
}

each([1,2,3,4], function (callback){
    console.log(callback);
});

each([1,2,3,4], function(val){
    console.log(val*2);
});

each([1,2,3,4], function(val){
    console.log(val/2);
});



/*  Create a function called "map" which accepts two parameters: an array and a callback. The "map" function should return a new array with the result of each value being passed to the callback function. 
Example:*/
let map=(arr,callback)=>{
    let newarray=[];
    arr.forEach(element => {
        newarray.push(callback(element));
    });
   console.log(newarray);
}



map([1,2,3,4], function(val){
    return val * 2;
}); // [2,4,6,8]







/* Create a function called "filter" which accepts two parameters an array and a callback. The function should return a new array with all of the values that return false for the callback.
Examples: */


let filter=(arr,callback)=>{
    let newarray=[];
    arr.forEach(element => {
        if(element<=2){
            newarray.push(callback(element));
        }       
    });
   console.log(newarray);
}

filter([1,2,3,4], function(val){
        return val ;
    
}); // [1,2]

let filter1=(arr,callback)=>{
    let newarray=[];
    arr.forEach(element => {
        if(element % 2 !== 0){
            newarray.push(callback(element));
        }       
    });
   console.log(newarray);
}


filter1([2,3,4,5], function(val){ 
        return val;
}); // [3,5] 







/* Create a function called "filter" which accepts two parameters an array and a callback. The function should return a new array with all of the values that return false for the callback.
Examples: */
let filter2=(arr,callback)=>{
    let newarray=[];
    arr.forEach(element => {
            if(!callback(element)){
                newarray.push(element);
            }     
    });
    console.log(newarray);
}

filter2([1,2,3,4], function(val){
    return val > 2;
}); // [1,2]

filter2([2,3,4,5], function(val){
    return val % 2 === 0;
}); // [3,5]






