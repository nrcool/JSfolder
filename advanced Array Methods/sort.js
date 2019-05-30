//high order Function 
//SORT

let months = ["March", "April", "May", "June"];

months.sort();// changed original array
console.log(months);

let array = [1, 13, 4, 26, 211, 9];

array.sort();// changed original array

console.log(array);

let nums = [4, 2, 5, 3, 1];

nums.sort((a, b) => a - b);
console.log(nums)
nums.sort((a, b) => b - a);
console.log(nums)


let items = [
    {
        name: "naqvi",
        age: 34
    },
    {
        name: "franz",
        age: 32
    },
    {
        name: "Ashu",
        age: 29
    },
    {
        name: "Saad",
        age: 32
    }
];


items.sort((a,b)=>a.age -b.age)

console.log(items);
/* [
    { name: 'Ashu', age: 29 },
    { name: 'franz', age: 32 },
    { name: 'Saad', age: 32 },
    { name: 'naqvi', age: 34 }
  ] */

items.sort((a,b)=>{
    let nameA=a.name.toLocaleUpperCase();
    let nameB=b.name.toLocaleUpperCase();//ignore  the upper lower case;
    if(nameA<nameB){
        return -1;
    }
    if(nameA>nameB){
        return 1;
    }
    return 0;
})
console.log(items);
/* [
    { name: 'Ashu', age: 29 },
    { name: 'franz', age: 32 },
    { name: 'naqvi', age: 34 },
    { name: 'Saad', age: 32 }
  ] */