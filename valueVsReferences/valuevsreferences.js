// VALUE VS REFERENCE

console.clear();

let myVal = 10;

function add10(val) {
   return val + 10;
}

console.log(add10(myVal)); //20

// NUMBERS /are always 'passed by values' / clones

let germany = 0;
let korea = germany;

germany += 1;
korea += 2;

console.log(germany, korea); // 1 2

// STRINGS /are always 'passed by values' / clones

let cheer = 'ole';
let boo = cheer;

cheer = 'gooooal!';
// boo = 'shakalaka';

console.log(cheer, boo); // gooooal! ole

// BOOLEANS /are always 'passed by values' / clones

let win = true;
let lose = win;

win = !win;

console.log(win); // false
console.log(lose); // true

// OBJECTS are always references

let score2018 = [
   [0, 1],
   [2, 1]
];
let score2022 = score2018;

//both arrays will be affected when they are references to each other
score2018.push([3, 1]);
score2018.push([10, 11]);
console.log(score2018); // [ [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 10, 11 ] ]
console.log(score2022); // [ [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 10, 11 ] ]

let player = {
   name: 'Stoichkov',
   goals: 129
}

let playerClone = player;

playerClone.goals = 4;

console.log(player); // { name: 'Stoichkov', goals: 4 }
console.log(playerClone); // { name: 'Stoichkov', goals: 4 }

let nums = [2, 5, 6];
let nums2 = [2, 5, 6];

let nums3 = 'bla';
let nums4 = 'bla';

//objects have identity
console.log(nums === nums2); // false

//primitives do not have identity
console.log(nums3 === nums4); // true

console.log("//////////////////");

const players = ["Christiano Ronalde", "lionel Messi", "Neymar Da Silva"];

//1 clone an array with a for loop
function cloneArrayFor(arr) {
   let newArr = [];
   for (let i = 0; i < arr.length; i++) {
       newArr.push(arr[i]);
   }
return newArr;
}

console.log(cloneArrayFor([12,3]));

//2 clone an array with for each

function cloneArrayEach(arr) {
   let newArr = [];

   arr.forEach(item => newArr.push(item));

   return newArr;
}

//3 clone an array with array.from

function cloneArrayFrom(arr){
    let newone= Array.from(arr);
    return newone;
}

let ARRay=[2,4,4,3,6];
let arr3=cloneArrayFrom(ARRay);
console.log(arr3);

//4 clone an array with spread operator

function ClonearrayWithSpread(arr){
    let newArray=[...arr];
    return newArray;
}

let Arrayfromspread=ClonearrayWithSpread(ARRay);
console.log(Arrayfromspread);

//5 clone an array with array.slice

function cloneArrayusingSlice(arr){
    let newone=arr.slice(0);
    return newone;
}
let slicedarray=cloneArrayusingSlice(ARRay);
console.log(slicedarray);


let personObject={name:"naqvi",age:34,country:"pakistan"};
let newPerson={};
for(let i in personObject){
    console.log(i)
    newPerson[i]=personObject[i];
}
console.log(newPerson)
newPerson.name="Rene";
console.log(newPerson);
console.log(personObject)


let X=1;
let Y=2;

let c=X++ + ++Y;
console.log(c);
console.log(Y);
console.log(X)


let greeter={
    greeting:"hello"
}
greeter="hello";
console.log(greeter);

greeter=[2,35,67,7]
console.log(greeter);

