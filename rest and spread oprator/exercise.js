let restSpread=(...arr3)=>{
    let newarray=[];
    let stringarray=[];
arr3.forEach(elem=>{
    if(Array.isArray(elem)){
elem.forEach(el=>{
    newarray.push(el);
});
}
else if((typeof(elem))=="string"){
    stringarray.push(elem);
} 

else
{
    newarray.push(elem);
}
    });

let sum=0;
for(let i=0;i<newarray.length;i++){
sum+=newarray[i];
}
let spread=[...stringarray];
 return [spread , sum];
/* return sum; */
};


console.log(restSpread([2,5,3,6,7],[7,5,4,3],5,7,[1000,1.4],3,98));