let array=[1,4,6,8,3,2,2,3,1];
let newarr=[];

for(let i=0;i<array.length;i++){
    if(newarr.indexOf(array[i])=== -1){
        newarr.push(array[i]);
    }
}
console.log(newarr);


let obj={};
for(let i of array){
    obj[array[i]]=true;
}
console.log(obj);
console.log(Object.keys(obj));


let  bset=new Set(array);
console.log([...new Set(array)]);
console.log(bset);