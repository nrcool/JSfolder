/* Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false. */
console.log("----------------------------1-----------------------------");


let checker=function(string){
    let x=0;
    let o=0;
    for(let i=0;i<string.length;i++){
        string=string.toLowerCase();
        if(string[i]==="o"){
            o++;
        }
        if(string[i]==="x"){
            x++;
        }
        if(o===x){
            return true;
        }else{
            return false;
        }
    }
};

console.log(checker("Xooxx"));

console.log("---------------------------2-----------------------------");
let equalSlices=function(totalslices,persons,toeach){
    if(totalslices>=persons*toeach){
        return true;
    }else{
        return false;
    }
};

console.log(equalSlices(11,5,3));
console.log(equalSlices(8, 3, 2))
// true
console.log(equalSlices(8, 3, 3))
// false
console.log(equalSlices(24, 12, 2))
 //true

 console.log("---------------------------3-----------------------------");
/*  Create a function that takes in an array of numbers and returns the sum of its cubes. Examples:

sumOfCubes([1, 5, 9]) ➞ 855
Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855 */

let sumOfCubes=function(array){
    let sumofcube=0;
    for(let i=0;i<array.length;i++){
        let numcube=Math.pow(array[i],3);
        sumofcube=sumofcube+numcube;
    }
    return sumofcube;
};
console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([3, 4, 5]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));



console.log("---------------------------4-----------------------------");
/* Amplify the Multiples of 4
Create a function that takes an integer and returns an array from 1 to the given number, where:

If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number).
If the number cannot be divided evenly by 4, simply return the number. */
/* amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25] */

let amplify=function(number){
    let numberarray=[];
    for(let i=0;i<=number;i++){
        if(i%4===0){
            numberarray.push(i*10);
        }
        else{
            numberarray.push(i);
        }
    }
    return numberarray;
};
console.log(amplify(4));
console.log(amplify(3));
console.log(amplify(25));

console.log("---------------------------5-----------------------------");

/* Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.

monthName(3) ➞ "March"
monthName(12) ➞ "December"
monthName(6) ➞ "June" */

let monthName=function(month){
    let monthNames = ["","January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  if(month>0&&month<13){
    return monthNames[month];
  }else{
      return "please Enter Correct Month Btw 1 to 12";
  }
  
};
console.log(monthName(1));



console.log("---------------------------6-----------------------------");
/* 6. Even Number Generator
Create a function that finds all even numbers from 1 to the given number. */

let evenNums=function(num){
    let evenNumbers=[];
    for(let i=1;i<=num;i++){
        if(i%2===0){
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
};
console.log(evenNums(8));
console.log(evenNums(4));
console.log(evenNums(2));

console.log("---------------------------7-----------------------------");
/* 7. Dictionary
Create a function that takes in an initial word and filters out an array to contain words that start with the same letters as the initial word.

Examples

dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []
Notes

If none of the words match, return an empty array.
Keep the filtered array in the same relative order as the original array of words./ */

const dictionary=function(string,array){
    let resultArray=[];
    for(let i=0;i<array.length;i++){
        if(array[i].includes(string)){
            resultArray.push(array[i]);
        }
    }
    return resultArray;
};
console.log(dictionary("bu", ["button", "breakfast", "border"]));
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]));


console.log("---------------------------8-----------------------------");

/* 8. is a four letter word.
Create a function that takes an array of strings. Return all words in the array that are exactly four letters.
Examples;
isFourLetters(["John", "James", "Jack", "Jeanne"]) ➞ ["John", "Jack"]
isFourLetters(["Tomato", "Corn", "Lettuce"]) ➞ ["Corn"]
isFourLetters(["Dog", "Cat", "Deer"]) ➞ ["Deer"] */

let isFourLetters=function(array){
    let ResultingArray=[];
    for(let i=0;i<array.length;i++){
        if(array[i].length===4){
            ResultingArray.push(array[i]);
        }
    }
    return ResultingArray;
};
console.log(isFourLetters(["John", "James", "Jack", "Jeanne"]));
console.log(isFourLetters(["Tomato", "Corn", "Lettuce"]));
console.log(isFourLetters(["Dog", "Cat", "Deer"]));


console.log("---------------------------9-----------------------------");

/* 9. Is it Symmetrical?
Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.
Examples:
isSymmetrical(7227) ➞ true
isSymmetrical(12567) ➞ false
isSymmetrical(44444444) ➞ true
isSymmetrical(9939) ➞ false
isSymmetrical(1112111) ➞ true */

let isSymmetrical=function(number){
    let numToStr=number.toString();
    let splitedNum=numToStr.split("");
    let reverseNum=splitedNum.reverse();
    let joinedNum=reverseNum.join("");
    let ConvertedNum=Number(joinedNum);
    if(number===ConvertedNum){
        return true;
    }
    else{
        return false;
    }
};
console.log(isSymmetrical(7227));
console.log(isSymmetrical(12567));
console.log(isSymmetrical(44444444));
console.log(isSymmetrical(9939));
console.log(isSymmetrical(1112111));


console.log("---------------------------10-----------------------------");

/* 10. c4n y0u r34d th15?
Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
Examples:
hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
Notes For your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5. */

let hackerSpeak=function(string){
    let splitstring=string.split("");
    let newstring=[];
    for(let i=0;i<splitstring.length;i++){
        if(splitstring[i]==="a"){
         newstring.push(splitstring[i].replace(splitstring[i],4));
          //  newstring.push(4);
        }else if(splitstring[i]==="e"){
            newstring.push(splitstring[i].replace(splitstring[i],3));
              //  newstring.push(3);
        }else if(splitstring[i]==="i"){
            newstring.push(splitstring[i].replace(splitstring[i],1));
              //  newstring.push(1);
        }else if(splitstring==="o"){
            newstring.push(splitstring[i].replace(splitstring[i],0));
              //  newstring.push(0);
        }else if(splitstring==="s"){
            newstring.push(splitstring[i].replace(splitstring[i],5));
              //  newstring.push(5);
        }else{
            newstring.push(splitstring[i]);
        }
    }
    return newstring.join("");
};

console.log(hackerSpeak("javascript is cool"));
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("become a coder"));
console.log(hackerSpeak("can you read this?"));
