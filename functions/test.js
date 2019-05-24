console.log("---------------------1-----------------------");
function findcity(city="ERR(please enter city name as parameter)"){
    let los=city.substring(0,3).toLowerCase();
console.log(los);
 if(los==="los"||los==="new"){
    console.log(`Name of the City is ${city}`);
}
        else{
    console.log(`The city name does not begin with Los or New`);
}  
}
findcity("New york");

console.log("---------------------2-----------------------");

function sumallintegers(...nums){
    let int=[...nums];
    let sum=null;

  for(let i=0;i<int.length;i++){
      sum=sum+int[i];
  }
  console.log(`sum of all integers in an array is ${sum}`);////2
}

sumallintegers(2,4,6);

console.log("--------------------3-----------------------");

function fullName(...names){
    let name=[...names];
    let name1=[...names];
  
    let rev_names=[];
  
    for(let i=0;i<name.length;i++){
        rev_names.unshift(names[i]);
    }
    console.log(`The Resulting Array is ${rev_names}`);
  
    let rev_names1=name1.reverse();
    console.log(`The Resulting Array is ${rev_names1}`);///3
  
}
fullName("john","smith");


console.log("--------------------4-----------------------");
function multipleOf100(num="ERR(need number parameter)"){

    if(num%100===0){
        console.log(`True`);
    }
    else{
      console.log(`False`);
    } /////4
}
multipleOf100(600);


console.log("--------------------5-----------------------");
function joinstring(str="need 3 parameters in function",str1="need 3 parameters in function",st2="need 3 parameters in function"){
    let wordsArray=[str,str1,st2];
let str5="ly";
let newWords=[];

for(let i=0;i<wordsArray.length;i++){
  let a= wordsArray[i].concat(str5);
   newWords.push(a);
}
console.log(newWords);/////5

}
joinstring("clever","happy","fun");

console.log("--------------------6-----------------------");
function evenOrOdd(numb="ERR(Missing parameter)"){
    if(numb%2===0){
        console.log(`${numb} is a even number`);
    }
    else{
        console.log(`${numb} is a even number`);
    }/////6
}
evenOrOdd(34);

console.log("--------------------7-----------------------");

function find3rdAngle(angle1="ERR(two angles needed)",angle2="ERR(two angles needed)"){
    let angle3=180-(angle1+angle2);

if(angle3<90){
    console.log(`An acute angle is smaller than 90°.`);
}
else if( angle3===90){
    console.log(` A right angle is exactly 90°.`);
}
else if( (angle3>90)&&(angle3<180) )
{
    console.log(`An obtuse angle is greater than 90°`);
}///7

}
find3rdAngle(45,45);

console.log("--------------------8-----------------------");

function make1stltuppercase(strword="need atleast 2 words"){
let ar=strword.split(" ");

for(let i=0;i<ar.length;i++){
   /*  a[i].toString(); */
   let b=ar[i];
    let c= ar[i].substring(0,1);

    console.log(c.toUpperCase()+b.substring(1));
}
}
make1stltuppercase("john james smith");

console.log("--------------------9-----------------------");

function wordscount(sentence="need 1 sentence as parameters in function"){
let words=sentence.split(" ");
console.log(words.length);
}
wordscount("One more example for good measure");

console.log("--------------------10-----------------------");

function arraymultipler(a,b,c,d,e){
    let numarray= [a,b,c,d,e];
let newnumarray=[];

for(let i=0;i<numarray.length;i++){
    let cal=numarray[i]*numarray.length;
    newnumarray.push(cal);
}
console.log(newnumarray);
///10
}
arraymultipler(1, 0, 3, 3, 7);