/* 1. Run Along
Create a while loop that runs as long as i is less than 15. Use a while loop. */


console.log("::::::::::::::::1:::::::::::::::::");

let i=0;
while(i<15){
    console.log(`valuee of i is ${i}`);
    i++;
}

console.log("::::::::::::::::2:::::::::::::::::");

/* 2. City Names
Create an array of city names. Loop through the array and add the city names to a string.

Example of expected output: "Berlin, Paris, Prague, Rome". */
let array=["Berlin", "Paris", "Prague", "Rome","Hamburg","Lahore"];

let a=0;
let string="";
while(a<array.length){
    string=string + `${array[a]}, `;
    a++;
}
console.log(`"${string.substring(0,string.length-2)}"`);


console.log("::::::::::::::::3:::::::::::::::::");

/* 3. Odds and Evens
Create a function that takes an array as an argument. The function should add 1 to each odd integer and should minus 1 from each even integer.

Examples:
evenOddTransform([3, 5, 2, 4] -> expected output: [4, 6, 1, 3]
evenOddTransform([6, 9, 10, 20] -> expected output: [5, 10, 9, 19] */
  
    let evenOddTransform=array=>{
        let newarray=[];
        let i=0;
        while(i<array.length){
            if(array[i]%2===0){
                newarray.push(array[i]-1);
            }
            else{
                newarray.push(array[i]+1);
            }
            i++;
        }
        console.log(newarray);
    }
    evenOddTransform([3, 5, 2, 4]);
    evenOddTransform([6, 9, 10, 20]);

    console.log("::::::::Do While::::::::1:::::::::::::::::");

 /*    Do While: Use do while loops to complete the tasks below.
    1. sumOfNumbers
    Create a function that takes an array of at least 3 numbers as an argument and returns the sum of the numbers. Use a do while loop. */

    let sumAll=array=>{
        let sum=0;
        let a=0;
        do{
            sum=sum+array[a];
            a++;
        }while(a<array.length);
        return (`Sum of All numbers in array is ${sum}`);
    }

    console.log(sumAll([3,6,8,5]));


    console.log("::::::::Do While::::::::2:::::::::::::::::");
/*     2. Add it up!
Create a function that adds numbers from 1-20 together using a while loop. */

let AddAllNum=()=>{
    let total=0;
    let i=1;
    do{
        total+=i;
        i++;
    }while(i<=20);
console.log(`sum of all numbers from 1- 20 is ${total}`);

}
AddAllNum();


console.log("::::::::Do While::::::::3:::::::::::::::::");

/* 3. Count Instances
Create a function that takes an array as an argument and determines whether the array's elements are strictly increasing, decreasing or neither.

Examples:
check([1, 2, 3]) ➞ "increasing"
check([3, 2, 1]) ➞ "decreasing"
check([1, 2, 1]) ➞ "neither"
check([1, 1, 2]) ➞ "neither" */

let check=array=>{
    let i=0;

        if(array[i]<array[i+1]&&array[i+1]<array[i+2]){
            console.log("increasing")
        }else if(array[i]>array[i+1]&&array[i+1]>array[i+2]){
            console.log("decreasing")
        }
        else{
            console.log("neither");
        }  
}
let check1=array=>{
   let k=0;
   let i=0;
    while(i<array.length-1){
        if(array[i+1]>array[i]){
            k++;
           
           }
           i++;
        }
        console.log(k)
      if(k===array.length-1){
          console.log("increasing");
      }else if(k===0){
          console.log("decreasing");  
      }else{
          console.log("neither");
      } 
   
   
};
check1([2, 3,4,5,6]);
check1([3, 2, 1,0,-1]);
check1([1, 2, 1]);
check1([1, 1, 2]); 


/* forEach(): Use the forEach() method to complete the tasks below
1. Capitalize
Create a function that takes an array of names and returns an array with the first letter capitalized using a do while loop.
Examples
format(["matt", "sara", "lara"]) ➞ ["Matt", "Sara", "Lara"
format(["samuel", "MARIA", "luke", "mary"]) ➞ ["Samuel", "Maria", "Luke", "Mary"]
format(["Cynthia", "Karen", "Jane", "Carrie"]) ➞ ["Cynthia", "Karen", "Jane", "Carrie"]
Notes: Keep names in the same order and make sure that only the first lesson of the name is capitalised. See "Maria" in example 2. */
console.log("::::::::forEach::::::::1:::::::::::::::::");

let format=array=>{
    let newarray=[];
    array.forEach(elem=>{
        elem=elem.toLowerCase();
       let char=elem[0].toUpperCase();
        let remaingChar=elem.substring(1);
        newarray.push(char+remaingChar);
    });
    console.log(newarray);
    
};
format(["matt", "sara", "lara"]);
format(["samuel", "MARIA", "luke", "mary"]);
format(["Cynthia", "Karen", "Jane", "Carrie"]);


console.log("::::::::forEach::::::::2:::::::::::::::::");


/* 2. No Duplicates!
A set is a collection of unique items. A set can be formed from an array from removing all duplicate items. Create a function using a do while loop which takes an array and transforms it into a set of unique values. See the examples below.
Example
[1, 4, 4, 7, 7, 7]
// original array
[1, 4, 7]
// original array transformed into a set
[1, 6, 6, 9, 9] ➞ [1, 6, 9]
[2, 2, 2, 2, 2, 2] ➞ [2]
[5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25] */

let noDuplicate=array=>{
    let newarray=[];
    array.forEach(elem=>{
        if(newarray.indexOf(elem)=== -1){
            newarray.push(elem);
        }
    })
    console.log(newarray);
};

noDuplicate([1, 4, 4, 7, 7, 7]);
noDuplicate([1, 6, 6, 9, 9]);
noDuplicate([2, 2, 2, 2, 2, 2]);
noDuplicate([5, 10, 15, 20, 25]);

let noduplicate=array=>{
    let set=new Set(array);
    console.log([...set]);
    let newarray=Array.from(set);
    console.log(newarray)
}
noduplicate([1, 4, 4, 7, 7, 7])

console.log("::::::::forEach::::::::3:::::::::::::::::");
/* 3. Repeat it
Create a function that takes two arguments (item, times). Create a function that repeats the "item" as many times as specified by "times". The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.
Example: repeat("example", 3) -> ["example", "example", "example"] */


let repeat=(string,num)=>{
    let newarray=[];
    let i=1;
    while(i<=num){
        newarray.push(string);
        i++;
    }
    console.log(newarray);
};
repeat("example", 3);


console.log(":::::::::::::::::::BONUS::::::::::::::::::::::::");
/* Bonuses - Choose the loop */

/* Find the Odd Ones Out
Create a function that takes an array as an argument and find the integer which occurs an odd number of times.

Examples
findOdd([-2, -2, 3, 3, -5, 7, -5, 7, 7]) ➞ 7 (appears three times)
findOdd([3, 2, 2, 3, 20, 10, 2, 20, 10, 3, 3, 2, 2]) ➞ 2 (appears 5 times)
findOdd([12]) ➞ 12 (appears once) */

/*  let findOdd=array=>{
     let checker=0;
     let k;
  for(let i=0;i<array.length;i++){
      k=0;
      for(let j=0;j<array.length;j++){
          if(array[i]===array[j]) {
            k++;
            if(k>checker){
                checker=k;
                result=array[i]
              }
          }
         
      }
  } console.log(`${result} repeats ${checker} times`);
} ; */

let findOdd=array=>{
    let checker=0;
    let k,i=0;
 while(i<array.length){
     k=0;
     let j=0;
     while(j<array.length){
         if(array[i]===array[j]) {
           k++;
           if(k>checker){
               checker=k;
               result=array[i];
             }
         }
         j++;
     }
     i++;
 } console.log(`${result} repeats ${checker} times`);
} ;

findOdd([-2, -2, 3, 3, -5, 7, -5, 7, 7]);
findOdd([3, 2, 2, 3, 20, 10, 2, 20, 10, 3, 3, 2, 2])



findOdd([12]);




function findOdd1(arr) {
   let obj = {};

   for (let p = 0; p < arr.length; p++) {
       if (!obj[arr[p]]) {
           obj[arr[p]] = 1;
       } else {
           obj[arr[p]]++;
       }
   }

   let values = Object.values(obj);
   let keys = Object.keys(obj);
   let bigV = Math.max(...values);

   let index = values.indexOf(bigV);

/*    console.log(index);
   console.log(keys[index]); */

   console.log(`The ${keys[index]} repeats ${bigV} times in [${arr}]`);



}

findOdd1([-2, -2, 3, 3, -5, 7, -5, 7, 7]);
findOdd1([3, 2, 2, 3, 20, 10, 2, 20, 10, 3, 3, 2, 2]);
findOdd1([12]);



console.log(":::::::::::::::::::BONUS::::::::::::::::::::::::");
/* 
Factors
A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain: [3, 6, 12, 36]
// 3 is a factor of 6 (3 * 2 = 6)
// 6 is a factor of 12 (6 * 2 = 12)
// 12 is a factor of 36 (12 * 3 = 36)
Create a function that determines whether or not an array is a factor chain using a while loop.
Examples
factorChain([1, 2, 4, 8, 16, 32]) ➞ true
factorChain([1, 1, 1, 1, 1, 1]) ➞ true
factorChain([2, 4, 6, 7, 12]) ➞ false
factorChain([10, 1]) ➞ false */

let factorChain=array=>{
    let a=0;
    while(a<array.length-1){
    if(!Number.isInteger(array[a+1]/array[a])){
  
        return false;
    }
    a++;
}
return true;
};
console.log(factorChain([1, 2, 4, 8, 16, 32]));
console.log(factorChain([1, 1, 1, 1, 1, 1]));
console.log(factorChain([2, 4, 6, 7, 12]))

