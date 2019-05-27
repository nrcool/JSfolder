/* 1. Combining Arrays
Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
Once again create two arrays. Add the items of one array to the beginning of the second array. */

console.log("::::::::::::::::::1:::::::::::::::.");

let countries=["United-Kingdom","France","germany","US"];
let Cities=["London","Paris","Berlin","New-York"];

let newarray=[...countries,...Cities];
console.log(newarray)
let newarray1=[countries[0],...Cities];
console.log(newarray1);

console.log("::::::::::::::::::3:::::::::::::::.");

/* 3. Find the Largest...
Create a function to find the largest number in an array. */

let Largest=arr=>{
    return Math.max(...arr);
};
console.log(Largest([5,6,9]));

/* 4. Find the Smallest
Create a function to find the smallest number in an array. */
console.log("::::::::::::::::::4:::::::::::::::.");
let Smallest=arr=>{
    return Math.min(...arr);
};
console.log(Smallest([5,6,9]));

console.log("::::::::::::::::::5:::::::::::::::.");
/* 5. Clone and Merge
Given two objects:

const person = {name: "John"}
const job = {role: "Teacher"}
Clone the person object.
Merge these two objects into one object: "employee". Use the spread operator to do so. Then change the values of the properties in the employee object. */

const person = {name: "John"};
const job = {role: "Teacher"};

let newPerson={...person};
console.log(newPerson);
let employee={...person,...job};
console.log(employee);

console.log("::::::::::::::::::6:::::::::::::::.");

/* 6. Is the average a whole number?
Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
Examples
isWhole(1, 2, 3, 4) ➞ false
isWhole(9, 2, 2, 5) ➞ false
Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result! */

let isWhole=(...arr)=>{
    let sum=0;
    arr.forEach(elem=>{
        sum+=elem;
    })
    let avg=sum/arr.length;
    if(Number.isInteger(avg)){
        return true;
    }else{
        return false;
    }
}

console.log(isWhole([1, 2, 3, 4]));

/* 7. Minimum Removals for Even Output
Create a function that takes 4 integers as an argument and returns the minimum number of removals to make the sum of all the elements even.

Examples:
minRemovals(1, 2, 3, 4) ➞ 0 removals
minRemovals(5, 7, 9, 11) ➞ 0 removals
minRemovals(5, 7, 9, 12) ➞ 1 removal */
console.log("::::::::::::::::::7:::::::::::::::.");


let minRemovals=(...arr)=>{
    let sum=0;
    arr.forEach(elem=>{
        sum+=elem;
    });
    let count=1;
    if(sum%2===0){
        removal=`0 removal :sum of all the elements is ${sum}`
        return removal;
    }else{
        for(let i=0;i<arr.length;i++){
            if(arr[i]%2==0){
               arr.shift(arr[i]);
               count++;
            }else{
                removal=`${count} removal : remove first ${count} values from arguments to get even ${sum}`
                return removal;
            }
        }
    }
}
console.log(minRemovals(1, 2, 3, 4));
console.log(minRemovals(5, 7, 9, 11));
console.log(minRemovals(12, 5, 7,9));


/* 8. Quadratic Equation
Create a function to find only the positive determinant value of x in any quadratic equation ax^2 + bx + c. The function will take three arguements:
a as the coefficient of x^2 (x to the power of 2)
b as the coefficient of x
c as the constant term
Once you have solved this problem, pass in an array as an argument which contains three elements - check if this method still outputs the correct result!
 */
console.log(":::::::::::::::::8:::::::::::::::.");

function Quadratic(a,b,c){
    let x = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    let x2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    console.log(`+ X is ${x} and - X is ${x2}`);
}

Quadratic(1,1,-1);


/* 9. Spread Date
Create an array which contains a year, a month and a date. Use spread to access the date of this array. */

console.log("::::::::::::::::::9:::::::::::::::.");


let Getdate=array=>{
    array.forEach(elem=>{
        if(elem===new Date().getDate()){
            console.log(elem);
        }
    });
};

Getdate([23,05,2019]);


let GetDate1=array=>{
let date=(new Date(...array));
console.log(date.toLocaleDateString(),date.getTime().toLocaleString());
};

GetDate1([2019,04,27]);

