let text = "";
let i = 6;
do {
  text = "The number is " + i;
  console.log(text);
  i++;
}while (i < 5);



let array=[2,3,5,6,7,8,9];

array.forEach(Element=>{
    if(Element%2===0){
        console.log( Element);
    }
});