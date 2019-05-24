let oldCar={
    make:"Toyota",
    Model:"Tercel",
    year:1995
};
let count=0;
/* for in loop will only access keys in Object; */
for(const key in oldCar){
    console.log(`${key} : ${oldCar[key]}`);
    count++;
    if(count==1){
        break;
    }
}

let person={
    fname:"john",
    lname:"Doe",
    Age:28
}

let text="";
for(const x in person){
    text+=`${person[x]}`;

    console.log(`${person[x]}`);
}

console.log(text);

let a=[3,4,6,8,9,0];

for(const items in a){
    console.log(a[items])
}