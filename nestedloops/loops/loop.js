console.log("-----------------------1-----------------------");
let a=[0, 1, 2, 3, 4,0, 1, 2 ,3, 4, 0, 1, 2, 3, 4];

let sum=0;

for (let i=0;i<a.length;i++){
    sum=sum+i;
}
console.log(sum);


console.log("-----------------------2-----------------------");



 /*    for(let i=0;i<20;i++){  
         for(let x=5;x>0;x--){
            y.push(" ");
        }
        y.push("*");
        console.log(y.join(""));
    } */

let dif=10;
    for(let i=0;i<10;i++){ 
        let y=[]; 
        for(let x=dif;x>0;x--){
           y.push(" ");
       }
       dif--;
       for(let p=0;p<=i;p++){
        y.push("* ");
        
       }
       console.log(y.join(""));
       
   }
  /*   for(let i=20;i>0;i--){
        y.pop();
        console.log(y.join(""));
    } */
   


    console.log("-----------------------3-----------------------");
let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
let result=[];
for(let i=0;i<arr.length;i++){
    console.log("ROW"+(i+1) +":");
    for(let j=0;j<arr[i].length;j++){
        console.log(`${arr[i][j]}  `)
    }
}



console.log("-----------------------4----------------------");
let b=[1,2,3,4];
let result4=[];
for(let i=0;i<b.length;i++){
    for(let a=1;a<b.length;a++){

            result4.push(b[i])

    } 
}
console.log(result4.join(" "));


console.log("-----------------------5-----------------------");
let arr1=[0,1,2,3,4];
let result5=[];
for(let i=0;i<arr1.length;i++){
    for(let b=0;b<arr1.length;b++){
        result5.push(arr1[b]);
    }
}
console.log(result5.join(" "));