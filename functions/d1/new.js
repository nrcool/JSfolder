console.log("------------------------1-----------------------");
function reverse(num){
   let num1=num.toString();
    numarray=num1.split("");
    reversedarray=numarray.reverse();
    convertednum=reversedarray.join("");
    console.log(convertednum);
}
reverse(34567);


console.log("------------------------2-----------------------");
function alphaOrder(string){
    stringarray= string.split("");
    arrangedChar=stringarray.sort();
    finalstring=arrangedChar.join("");
    console.log(finalstring);
}
alphaOrder("webdev");


console.log("------------------------3-----------------------");
function findGreatest(arguments,num){
    let resultingArray=[];
    for(i=0;i<arguments.length;i++){
        if(num<arguments[i]){
            resultingArray.push(arguments[i]);
        }
    }
    console.log(resultingArray);
}

findGreatest([10, 20, 30], 12);

console.log("------------------------4-----------------------");

function dogAge(num){
    let dogage=num*7;
    console.log(`Your doggo is ${dogage} years old in human years!`);
}
dogAge(5);



console.log("------------------------5-----------------------");
function calcSupply(age,amount){
    let lifeage=80;
    let remainingage=lifeage-age;
    let lifesupply=(remainingage*365)*amount;
    console.log(lifesupply);
}
calcSupply(25, 2);
calcSupply(40, 3);

console.log("------------------------BONUS-----------------------");


function calcSupplyBonus(age,amount){
    let lifeage=80;
    let remainingage=lifeage-age;
    let lifesupply=(remainingage*365)*amount;
    console.log(Math.round(lifesupply));
}
calcSupplyBonus(40, 2.2);

console.log("------------------------6-----------------------");

function longestWord(sentence){
    let wordsarray=sentence.split(" ");
    let length=wordsarray[0].length;
    let longestword=wordsarray[0];
    for(let i=0;i<wordsarray.length;i++){
            if(wordsarray[i].length>length){
                length=wordsarray[i].length;
                longestword=wordsarray[i];
            }
    }
    console.log(length);
    console.log("longest word in this sentence is "+longestword);
}
longestWord("this is a web development course");

console.log("------------------------7-----------------------");

function findVowels(sentence){
    let vowelnumbers=0;
    for(let i=0;i<sentence.length;i++){
        if(sentence[i]==="a"|| sentence[i]==="e"||sentence[i]==="o"||sentence[i]==="i"||sentence[i]==="u"){
            vowelnumbers++;
        }
    }
    console.log(vowelnumbers+" vowels found");
}

findVowels("this is a string");


console.log("------------------------8-----------------------");
function detectType(data){
    let datatype=typeof data;
    console.log("type of argument is a "+datatype);
}

detectType("hello");
detectType(["hello"]);
detectType(6);

console.log("------------------------9-----------------------");
function countOccurrences(sentence,character){
    let count=0;
    for(let i=0;i<sentence.length;i++){
        if(sentence[i]===character){
            count++;
        }
    }
    console.log(`occurrences of ${character}: ${count}`);
}
countOccurrences("this is a string", "i");

console.log("------------------------10-----------------------");

/* function countLetters(word){
    let output=[];
    let count=0;
    for(let i=0;i<word.length;i++){
        for(let b=0;b<word.length;b++){
            if(word[i]===word[b]){
                count++;
              
            } 
        }
     
     output.push(`{${word[i]},${count}}`); 

        count=0;  
    }
    console.log(output)
}
countLetters("tree t"); */

function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string[i];
        if (!freq[character]) {
            freq[character] = 1;
        } else {
             freq[character]++;
        console.log(freq[character]);
          
        }
        
    }

    console.log(freq);
};
getFrequency("ttee");

/* let ob={};

ob["naqvi"]=2;
ob["naqvi"]=4; 
let a="naqvi";
let b="franz";
ob[a]=8;
a="franz";
ob[a]=8;
ob[a]++;
ob.naqvi++;
console.log(ob);

let testobj={};
for(let i=0;i<10;i++){
    testobj[`Userindex ${i}`]=i*2;
}
console.log(testobj)
 */