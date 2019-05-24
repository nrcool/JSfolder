let obj={ min:-1, max:-5 };
let number="hello";


if((number>=obj.min&&number<=obj.max)||(number>=obj.max&&number<=obj.min)){

    console.log("number is in between range of "+obj.min+" and "+obj.max);
}else{
    console.log("number is out of range")
}


let obj1={ a: 1, b: 2, c: 3 };

let key=Object.keys(obj1);

let values=[];
 for(let i=0;i<Object.keys(obj1).length;i++){

     values.push(obj1[Object.keys(obj1)[i]]);

} 
console.log(key)
console.log(values)


let Naqvi= [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ];
let val=[];
let sum=0;
let total=0;
console.log(Naqvi.length)
for(let i=0;i<Naqvi.length;i++){
    let c=(Naqvi[i].score);
    let name=(Naqvi[i].tile);
    total+=c;
        if(name==="N"||name==="A"||name==="Q"||name==="V"||name==="I"){
            sum=sum+c;
        }
}
console.log(sum);
console.log(total)


let ob= {a: 1};

if(Object.keys(ob).length===0){
    console.log("object is not empty");
}else{
    console.log("object contains Data");
}