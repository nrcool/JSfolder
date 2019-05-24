/* 1. Write a program to display the city name if the string begins with "Los" or "New" otherwise return "The city name does not begin with Los or New".  */
console.log(`...............ANSWER OF QUESTION NUMBER 1................`);


let city1= "los angeles";

let los=city1.substring(0,3).toLowerCase();
console.log(los);
 if(los==="los"){
    console.log(`Name of the City is ${city1}`);
}
        else{
    console.log(`The city name does not begin with Los or New`);
}  

///////1


/*   2. Write a program to compute the sum of three elements of a given array of integers. The length of the array must be 3.  
  * **Example**
  * [5, 10, 15] ➞ 30 */
 console.log(`..............ANSWER OF QUESTION NUMBER 2.................`);
  let int=[5,10,15];
  let sum=null;

  for(let i=0;i<int.length;i++){
      sum=sum+int[i];
  }
  console.log(`sum of all integers in an array is ${sum}`);////2

/*   3. Given two strings, firstName and lastName, return a single string in the format "last, first".
  * **Examples**
  * "John", "Doe" ➞ "Doe, John"
  * "Mary", "Jane" ➞ "Jane, Mary" */
 console.log(`..............ANSWER OF QUESTION NUMBER 3.................`);
  let names=["john", "Doe"];
  let name1=["Mary", "Jane"];

  let rev_names=[];

  for(let i=0;i<names.length;i++){
      rev_names.unshift(names[i]);
  }
  console.log(`The Resulting Array is ${rev_names}`);

  let rev_names1=name1.reverse();
  console.log(`The Resulting Array is ${rev_names1}`)///3

  /* 4. Write a program that takes an integer and returns true if it's divisible by 100, otherwise return false.
  * **Examples**
  * 1 ➞ false
  * 1000 ➞ true
  * 100 ➞ true */
 console.log(`................ANSWER OF QUESTION NUMBER 4...................`);
  let num=600;

  if(num%100===0){
      console.log(`True`);
  }
  else{
    console.log(`False`);
  } /////4


/*   5. Write a program that adds a string ending to each item in an array.
* **Examples & Expected output**
* ["clever", "meek", "hurried", "nice"], "ly" ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
* ["new", "pander", "scoop"], "er" ➞ ["newer", "panderer", "scooper"]
* ["bend", "sharpen", "mean"], "ing" ➞ ["bending", "sharpening", "meaning"] */

console.log(`...........ANSWER OF QUESTION NUMBER 5...........`);
let wordsArray=["clever", "meek", "hurried", "nice"];
let str="ly";
let newWords=[];

for(let i=0;i<wordsArray.length;i++){
  let a= wordsArray[i].concat(str);
   newWords.push(a);
}
console.log(newWords);/////5


/* 6. Write a program that checks whether a number is even or odd and returns "even" for even numbers and "odd" for odd numbers.
* **Examples & Expected Output**
* 3 ➞ "3 is odd"
* 146 ➞ "146 is even"
* 19 ➞ "19 is odd" */
console.log(`.........ANSWER OF QUESTION NUMBER 6...........`);
let numb=34;

if(numb%2===0){
    console.log(`${numb} is a even number`);
}
else{
    console.log(`${numb} is a even number`);
}/////6


/* 7. You are given 2 out of 3 angles of a triangle, in degrees e.g. 29° and 59°. Write a program that classifies the missing angle (the third angle of a triangle) as either "acute", "right", or "obtuse" based on its degrees.

* **Notes**
* An acute angle is smaller than 90°.
* A right angle is exactly 90°.
* An obtuse angle is greater than 90°  (but smaller than 180°).
* For example: 11°, 20° should return "obtuse", since the missing angle would be 149°, which makes it obtuse.
* **Examples**
* 27°, 59° ➞ Then the third angle is 92° so it is "obtuse"
* 135°, 11° ➞ The third angle is "acute"
* 45°, 45° ➞ The third angle is a "right angle" */

console.log(`...........ANSWER OF QUESTION NUMBER 7..........`);
let angle1=45;
let angle2=45;
let angle3=180-(angle1+angle2);

if(angle3<90){
    console.log(`An acute angle is smaller than 90°.`);
}
else if( angle3===90){
    console.log(` A right angle is exactly 90°.`)
}
else if( (angle3>90)&&(angle3<180) )
{
    console.log(`An obtuse angle is greater than 90°`);
}///7



/* 8. Make a variable with the string value of "maria jane jones". Convert each first letter to uppercase. Make sure your code works for any three names e.g. "john james smith". */

console.log(`.........ANSWER OF QUESTION NUMBER 8...........`);
let strword="john james smith";
let ar=strword.split(" ");

for(let i=0;i<ar.length;i++){
   /*  a[i].toString(); */
   let b=ar[i]
    let c= ar[i].substring(0,1);

    console.log(c.toUpperCase()+b.substring(1))
}




/* 9. Write a program that takes a string and returns the word count. The string will be a sentence.
* **Examples Expected output**
* "This is an example" ➞ 4
* "One more example for good measure" ➞ 6
* "JavaScript is fun, right?" ➞ 4 */
console.log(`...........ANSWER OF QUESTION NUMBER 9...........`);

let sentence="One more example for good measure";
let words=sentence.split(" ");
console.log(words.length);//9



/* 
10. Write a program to multiply each value in an array by the number of items in that array.
* **Examples**
* [2, 3, 1, 0] (2 * 4), (3 * 4), (1 * 4), (0 * 4) ➞ [8, 12, 4, 0] 
* [4, 1, 1] ➞ [12, 3, 3]
* [1, 0, 3, 3, 7, 2, 1] ➞  [7, 0, 21, 21, 49, 14, 7]
* [0] ➞ [0] */
console.log(`..........ANSWER OF QUESTION NUMBER 10...........`);
let numarray= [1, 0, 3, 3, 7, 2, 1];
let newnumarray=[];

for(let i=0;i<numarray.length;i++){
    let cal=numarray[i]*numarray.length;
    newnumarray.push(cal);
}
console.log(newnumarray);
///10