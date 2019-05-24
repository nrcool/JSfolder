/* Math Object */


//ROUND
/* 
function round(number){
return Math.round(number);
}

console.log(round(4.6));


function ceil(number){
    return Math.ceil(number);
    }
    
    console.log(ceil(4.1));

    function floor(number){
        return Math.floor(number);
        }
        
        console.log(floor(4.8));


    function random(){
        return Math.random();
        }
        
        console.log(random());

    
        function Mathmin(...arg){
            return Math.min(...arg);
            }
            
            console.log(Mathmin(8,6,8,7,8,9,-3));


        function Mathmax(...arg){
                return Math.max(...arg);
                }
                
        let array=[3,5,4,7,8,4,-34566778,2,2,7];
    console.log(Mathmin(...array));



     let MATHMIN=(array)=>{
        let element=array[0];
         for(let i=0;i<array.length;i++){
            
            if(element>array[i]){
        element=  array[i];
            }

         }
         return element;
     }
    console.log(MATHMIN(array));
 */


/* let ar=[123,0.001,-123,0];
let element=[]
let MathMaxvalue= array=>{
    for(let i=0;i<array.length;i++){
        
    }
}; */

var getNum = function(array, type) {
    return Math[type].apply(null, array);
  };
  let ar=[123,0.001,-123,0];
  console.log(getNum(ar,"min"));
  console.log(getNum(ar,"max"));


  let date=new Date();
  console.log(date);

  let gettime=date.getTime();
  console.log(gettime);

  let getyear=date.getFullYear();
  console.log(getyear);

  let getmonth=date.getMonth();
  console.log(getmonth);
  let getday=date.getDay();
  console.log(getday)

let mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

let getmonthname=mlist[getmonth];
console.log(getmonthname);

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayName = days[getday];
console.log(dayName);

let getHours=date.getDate();
console.log(getHours);

let gethours=date.getHours();
let getminutes=date.getMinutes();
let getseconds=date.getSeconds();




let start=new Date();

for(let i=0;i<100000;i++){
    let a=i*i*i;
}
let end=new Date();

console.log(`the loop took ${end-start} ms`);

console.log(`TODAY IS ${getday},${dayName}: ${getmonthname}:${getyear} ,TIME :${gethours}:${getminutes}:${getseconds}  `)