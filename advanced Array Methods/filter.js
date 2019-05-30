//filter Method..

let aRR=[1,2,3,5,6,7];
const EvenaRR=aRR.filter(num=>num%2===0);//return num in array;[2,6]
console.log(EvenaRR);
const EvenaRR1=aRR.map(num=>num%2===0);//return true/false in array;[2,6]
console.log(EvenaRR1);


let age=[32,44,53,12,34];

function checkAdults(age){
    return age>=18;
}
console.log(age.filter(checkAdults))//return array [32,44,53,34]
console.log(checkAdults())//return false and stop function 


let words=["helloo","world","limit","functions"];
const result = words.filter(word => word.length>6);
console.log(result);

