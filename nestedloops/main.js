let a=["id", "name", "address", "age"];
console.log("length of a "+a.length);
let data=[

[1,"Naqvi","berlin",34],
[2,"john","berlin",30],
[3,"Peter","Hamburg",39]
]
/* console.log("print John"+ data[4][1]);
console.log("print Mango"+ data[2]);
console.log("length of data "+data.length); */

for (let i=1;i<2;i++){
    for (let j=0;j<data.length;j++){
        console.log( `
        ${a}  
        ${data[j]}`);
    }
}