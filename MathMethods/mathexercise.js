/* 1. Random Number
Create a function to return a random integer.
 */
console.log(":::::::::::::::::::1::::::::::::::::");

 let Randonnumber=(min,max)=>{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
 };
console.log(Randonnumber(3,7));

/* 2. Lowest Number
Create a function that takes an array as an argument and returns the number with the lowest value. */
console.log(":::::::::::::::::::2::::::::::::::::");

let Lowestnumber=(arg)=>{
    return Math.min(...arg);
}
console.log(Lowestnumber([2,3,5,78,1,-2]))


let SmallestNumber=0;
let LowestNum=(arr)=>{
    for(let i=0;i<arr.length;i++){
        SmallestNumber=Math.min(SmallestNumber,arr[i]);
    }
    return SmallestNumber;
};
console.log(LowestNum([3,6,-4575,8,0,-1,34556,-2]));



/* 
3. The Power Of
Create a function that takes two numbers as arguments. Return the value of the first number to the power of the second number. */
console.log(":::::::::::::::::::3::::::::::::::::");

let PowerFunc=(int,int1)=>{
    return Math.pow(int,int1);
 };
console.log( PowerFunc(2,3));


/* 4. Highest Number
Create a function that takes an array as an argument and returns the highest number in that array. */
console.log(":::::::::::::::::::4::::::::::::::::");
let Highestnumber=(arg)=>{
    return Math.max(...arg);
}
console.log(Highestnumber([2,3,5,78,1,-2]));


let BiggestNumber=0;
let biggestNum=(arr)=>{
    for(let i=0;i<arr.length;i++){
        BiggestNumber=Math.max(BiggestNumber,arr[i]);
    }
    return BiggestNumber;
};
console.log(biggestNum([3,6,-4575,8,0,-1,34556,-2]));
/* 
5. Pi
Create a function that given a number n, returns PI to n decimal places. Examples:

myPi(5) ➞ 3.14159 5 decimal places
myPi(4) ➞ 3.1416 4  decimal places
myPi(15) ➞ 3.141592653589793 15 decimal places */
console.log(":::::::::::::::::::BONUS QUESTION::::::::::::::::");
let names=[
    "Naqvi","Rene","Ehud","Saad","Franz","Tameem","Ahmad","Ramiz","Mohammad","Alisio","Yasmin","Lorraine","Hannah","Ashernafi","Yasir","Angi"
];

let RandomName=(names)=>{
  
   let randomnum= Math.floor(Math.random()*names.length);
   console.log(names[randomnum]);
   names.splice(randomnum,1);
}
RandomName(names);
RandomName(names);
RandomName(names);
RandomName(names);
RandomName(names);


function randomNoRepeats(array) {
    var copy = array.slice(0);
     return function() {
      if (copy.length < 1) { copy = array.slice(0); }
      var index = Math.floor(Math.random() * copy.length);
      var item = copy[index];
      copy.splice(index, 1);
      return item;
    };
  }
  let choose=randomNoRepeats(names);
console.log(choose());



console.log(":::::::::::::::::::5::::::::::::::::");

let circlePie=(n)=>{
    let value=Math.PI;
    ;
   
        console.log(value);
      console.log(   Math.round(Math.pow(10,18)*value.toFixed(n))/ Math.pow(10,18));
        console.log((value.toFixed(n)));  
}
circlePie(99);


console.log("::::::::::::::::Date Object:::::::::::::::::");
/* 1. What day is it?
Create a function to to display the current date and time in the following format: Today is Wednesday. The current time is 1PM : 34 : 59. */

console.log(":::::::::::::::::::1::::::::::::::::");
let date=new Date();
let day=date.getDay();
let Daynum=date.getDate();
let year=date.getFullYear();
let month=date.getMonth();
let hours=date.getHours();
let minutes=date.getMinutes();
let sec=date.getSeconds();


let TodayDate=()=>{
    let dayName=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let meridiem;
    if(hours>12){
        meridiem="PM";
        hours=hours-12;
    }else{
        meridiem="AM";
    }
    console.log(`Today is ${dayName[day]}. The current time is ${hours}${meridiem} : ${minutes} : ${sec}.`);
};

TodayDate();

console.log(":::::::::::::::::::2::::::::::::::::");

/* 2. Date Formats
Create a function to display the current date in the following formats dd-mm-yyyy, dd/mm/yyyy. */

let FormatDate=()=>{
    let Fdate=new Date();
    let newdate=Fdate.toDateString();
    console.log(newdate);
    console.log(`${Daynum}/${month}/${year}`);
};
FormatDate();

console.log(":::::::::::::::::::3::::::::::::::::");

/* Create a function to check whether the 1st of January is a Sunday between the years of 2014 and 2050. */


let FirstJanSunday=(startyear,endyear)=>{
    let counter=0;
    for(let i=startyear;i<=endyear;i++){
        let newdate=new Date(`${i}`,01,01);
        let getday=newdate.getDay();
        if(getday===0){
            counter++;
        }
    }    
    console.log(`Total Sundays on 1st January in between ${startyear} and ${endyear} are ${counter}` );
}  

FirstJanSunday(2014,2050);

/* 4. How many days till Christmas?
Create a function to calculate the days till Christmas. */
console.log(":::::::::::::::::::4::::::::::::::::");

let Chrismas=()=>{
    today=new Date();
    let cmas=new Date(today.getFullYear(), 11, 25);
     if (today.getMonth()==11 && today.getDate()>25) 
    {
    cmas.setFullYear(cmas.getFullYear()+1); 
    }  
    let one_day=1000*60*60*24;
    console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
    " days left until Christmas!");
}
Chrismas();




/* 5. Days in a month
Create a function to calculate the number of days in a specified month. Examples and Expected Output:

getDaysInMonth(1, 2012); --> 31
getDaysInMonth(2, 2012); --> 29
getDaysInMonth(9, 2012); --> 30
getDaysInMonth(12, 2012); --> 31 */
console.log(":::::::::::::::::::5::::::::::::::::");

let getDaysInMonth=(month, year)=>{
    let Daysinmonth= new Date(year, month, 0).getDate();
    console.log(Daysinmonth)
}
getDaysInMonth(1, 2012);
getDaysInMonth(2, 2012);
getDaysInMonth(9, 2012);
getDaysInMonth(12, 2012);


let test=new Date(0,0,0).getFullYear();
console.log(test)
