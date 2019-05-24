console.log(":::::::::::::::::::::::::1::::::::::::::::::::::::::::");
/* 1. Add up
Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10. Examples of output:

addUp(4) ➞ 10
addUp(13) ➞ 91
addUp(600) ➞ 180300 */

let AddNum=arg=>{
    let sum=0;
    for(let i=0;i<=arg;i++){
        sum=sum+i;
    }
return sum;
};
console.log(AddNum(4));
console.log(AddNum(13));
console.log(AddNum(600));

console.log("::::::::::::::::::::::::2::::::::::::::::::::::::::::");
/* 2. Less than or Equal to Zero?
Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false. Examples:

lessThanOrEqualToZero(3) ➞ false
lessThanOrEqualToZero(0) ➞ true
lessThanOrEqualToZero(-4) ➞ true
lessThanOrEqualToZero(10) ➞ false */

let lessThanOrEqualToZero=num=>{
    return  (num<=0)? true:false; 
};

console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-4));
console.log(lessThanOrEqualToZero(10));


console.log("::::::::::::::::::::::::3::::::::::::::::::::::::::::");

/* 3. Missing Number
Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number. Examples:

missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7 */

let missingNums=arr=>{
    let check;
    for(let a=1;a<=10;a++){
       (arr.includes(a))?  check=check:     check=a;
    }
return check;
};
console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));


console.log("::::::::::::::::::::::::4::::::::::::::::::::::::::::");
/* 4. isPrime?
Create a function that returns true if a number is prime and false if it's not. A prime number is any positive integer that is evenly divisible by only two divisors: 1 and itself. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29. Examples:
isPrime(7) ➞ true
isPrime(9) ➞ fals
isPrime(10) ➞ false
Note: 1 is not a prime number */

let isPrime=num=>{
    let Primenumbers=[2, 3, 5, 7, 11, 13, 17, 19, 23 ,29];
    for(let i=0;i<Primenumbers.length;i++){
        if(Primenumbers.includes(num)){
            isprime=true;
        }else{
            isprime=false;
        }
    return isprime; 
    }
};
console.log(isPrime(7));
 console.log(isPrime(9));
console.log(isPrime(10));

let primenum=num=>{
    if(num==2){
        return true;
    }
    if(!Number.isInteger(num)||num<2 || !(num%2)){
        return false;
    }
    for(let i=3;i<=Math.sqrt(num);i++,i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
};

console.log(primenum(12769))


let PrimeN=num=>{
    for(let i=1;i<num;i++,i++){
        if(((i*6)-1)===num || ((i*6)+1)===num ){
            return true;
        }
    }
    return false;
}
console.log(PrimeN(113));

let isPrimeNum=num=>{
    if((num%2===0)||(num%3===0)||(num%5===0)||(num%7===0)||(Math.sqrt(num)%1===0)){
        return false;
    }else{
        return true;
    }
}
console.log("______--------_____-------______");
console.log(isPrimeNum(12769));
console.log(isPrimeNum(113));
console.log(isPrimeNum(49));
console.log(isPrimeNum(13));
console.log(isPrimeNum(34562));
console.log("::::::::::::::::::::::::5::::::::::::::::::::::::::::");







/* 5. snake_case -> camelCase
Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase. Examples:

toCamelCase("hello_world") ➞ "helloWorld"
toCamelCase("javascript_is_fun") ➞ "javaScriptIsFun" */
let toCamelCase=string=>{
    return string.replace(/[_][a-z]/gi, char=>{
        return char.toUpperCase().replace("_","");
    });
};

let toCamelCase1=string=>{
    string=string.toLowerCase();
    let splitedstring=string.split("_");
    for(let i=0;i<splitedstring.length;i++){
        if(i!==0){
            let uppercase=splitedstring[i].substring(0,1).toUpperCase();
           
            let newstringword=uppercase+splitedstring[i].substring(1);

            splitedstring.splice(i,1,newstringword);
      
        }
    }
    console.log(splitedstring.join(""));
}


toCamelCase1("hello_world");
console.log(toCamelCase("java_script_is_fun"));


console.log("::::::::::::::::::::::::6::::::::::::::::::::::::::::");
/* 
6. One is not like the others...
Create a function that takes an array of numbers and return the number that's unique. Examples:
unique([3, 3, 3, 7, 3, 3]) ➞ 7
unique([0, 0, 0.77, 0, 0]) ➞ 0.77
unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0 */

let unique=array=>{
    let answer;
    let count;
    for(let i=0;i<array.length;i++){
        count=0;
        for(let a=0;a<array.length;a++){
           
            if(array[i]===array[a]){
                count++;
              
            }
        }
        if(count===1){
            return answer=array[i];
        }
}
}

console.log(unique([3, 3, 3, 7, 3, 3]));
console.log(unique([0, 0, 0.77, 0, 0]));
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1]));


console.log("::::::::::::::::::::::::7::::::::::::::::::::::::::::");
/* 
7. Where's Waldo?
Create a function that takes a string and returns true if Waldo is found and false if he's not. Examples:
isWaldoHere("is there wal here ?") ➞ false
isWaldoHere("I found you Waldo!") ➞ true
isWaldoHere("is wally here?") ➞ false
isWaldoHere("waldo is here") ➞ true */
let isWaldoHere1=string=>{
    let reg=/\bwaldo\b/gi;
    if(string.match(reg)){
        console.log(true);
    }
    else{
        console.log(false)
    }

}
let isWaldoHere=string=>{
   string = string.toLowerCase();
    let findingword=("Waldo").toLowerCase();
    if(string.includes(findingword)){
        console.log(true);
    }else{
        console.log(false);
    }
}
isWaldoHere("is there wal here ?") ;
isWaldoHere1("I found you aWaldo!") ;
isWaldoHere("is wally here?") ;
isWaldoHere("waldo is here");


console.log("::::::::::::::::::::::::8::::::::::::::::::::::::::::");
/* 8. Validate
Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.
Notes
The string must contain an @ character.
The string must contain a . character.
The @ must have at least one character in front of it.
e.g. "john@example.com" is valid while "@example.com" is invalid.
The . and the @ must be in the appropriate places.
e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid. */

let Validate=email=>{
    if( 
        email.includes("@")&& email.includes(".")&& (email.indexOf("@")>0)&&
    (email.lastIndexOf("@")!=email.length-4)&&
   
       ( email.lastIndexOf(".")<=email.length-3)&&

    ((email.indexOf(".",email.indexOf("@"))==email.lastIndexOf("."))))
{
console.log(`${email}   is a Valid Email`);

}
else{
    console.log(email + "  is a inValid Email"); 
}
};



let Validate1=email=>{
    let reg=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
   let re = /\S+\.?\w@[a-zA-Z0-9]+\.\w{2}\S?/;
    if(email.match(re)){
        console.log("this is a Valid Email");
    }else{
        console.log("inValid Email Address");
    }
}


Validate1("john@example.com");
Validate1("@example.com");
Validate1("john.smith@com");
Validate1("jo.hn.smith@em.ail.com");
Validate1("john.smith@email..de");


console.log("::::::::::::::::::::::::9::::::::::::::::::::::::::::");

/* 9. Pig Latin Translation
Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds 'ay' to the end of the word. This is a basic form of "Pig Latin".
Rules
Move the first letter of each word to the end of the word.
Add "ay" to the end of the word.
Words starting with a vowel (A, E, I, O, U) simply have "WAY" appended to the end.
Examples:
pigLatin("Cats are great pets.") ➞ "Atscay areway reatgay etspay."
pigLatin("Tom got a small piece of pie.") ➞ "Omtay otgay away allsmay iecepay ofway iepay."
pigLatin("He told us a very exciting tale.") ➞ "Ehay oldtay usway away eryvay excitingway aletay." */
 let pigLatin=(string)=>{
     let result=[];
     let vowels=["A", "E", "I", "O", "U"];
    let spstring=string.split(" ");
    for(let i=0;i<spstring.length;i++){
        let firstchar=spstring[i].substring(0,1).toUpperCase();
            if(vowels.includes(firstchar)){
                console.log("trueeeeee")
                    let newWord=spstring[i]+"way";
                    if(i==0){
                        let wordCap=newWord[0].toUpperCase()+newWord.substring(1);
                        result.push(wordCap)
                    }else{
                        result.push(newWord);
                    }
          
        }else{
            let newWord1=spstring[i].substring(1)+spstring[i].substring(0,1).toLowerCase()+"ay";
            if(i==0){
                let wordCap1=newWord1[0].toUpperCase()+newWord1.substring(1);
                result.push(wordCap1);
            }else{
                result.push(newWord1);
            }
            
        }
        
    }
    let finalResult=result.join(" ");
    console.log(finalResult)
};
pigLatin("He told us a very exciting tale.");


console.log("::::::::::::::::::::::::10::::::::::::::::::::::::::::");

/* 10. X To The Power of X
Create a function that takes a base number and an exponent number and returns the calculation.

Examples
calculateExponent(5, 5) ➞ 3125
calculateExponent(10, 10) ➞ 10000000000
calculateExponent(3, 3) ➞ 27
Notes
All test inputs will be positive integers.
Extra Problem
Bonus Word Ranking Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.
Examples:
wordRank("The quick brown fox.") ➞ "brown"
wordRank("Nancy is very pretty.") ➞ "pretty
wordRank("Check back tomorrow, man!") ➞ "tomorrow"
wordRank("Today is Wednesday.") ➞ "Wednesday"
Notes
The returned string should only contain alphabetic characters (a-z).

Preserve case in the returned string (see 4th example above). */
let calculateExponent=(num,pow)=>{
    return Math.pow(num,pow);
}

let calculateExponent1=(num,expo)=>{
    let exponent=1;
    for(let i=1;i<=expo;i++){
        exponent=exponent*num;
    }
    return exponent;

}
console.log(calculateExponent1(5,5));
console.log(calculateExponent(10,10));
console.log(calculateExponent(3,3));






let wordRank=string=>{
    let spwords=string.split(" ");
    let score=0;
    
    let resultingword="";
    for(let i=0;i<spwords.length;i++){
        let score1=0;
        for(let j=0;j<spwords[i].length;j++){
            if( (spwords[i].charCodeAt(j)>64 && spwords[i].charCodeAt(j) <91) || (spwords[i].charCodeAt(j)>96 && spwords[i].charCodeAt(j)<123)){
                score1= score1+spwords[i].charCodeAt(j);
              
            }
        }
        if(score1>=score){
            score=score1;
            resultingword=spwords[i];
        }
    }
    return resultingword;
}

console.log(wordRank("The quick brown fox."))
console.log(wordRank("Nancy is very pretty."));
console.log(wordRank("Check back tomorrow, man!"));
console.log(wordRank("Today is Wednesday."));

