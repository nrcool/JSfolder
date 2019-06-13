/* funtion myFunction(){
    console.log("test")
}// SyntaxError */

/* function loop(){
    while(true){
        console.log("hello");
    }
}//Runtime Error */

/* function calcAreaRect(x,y){
    return x+y;
}
let area=calcAreaRect(2,4);
console.log(area)//semantic error */

/* function myFunc(){
    console.log(`${myVar}`)
}
myFunc();//myVar is not defined; */

/* let fruits=true;
for(let i=0;i<fruits.length;i++){
    const item=fruits[i];
    console.log(item);
}//use wrong data type */


/* try{
console.log("hello",myname)
}catch(error){
    console.log(error)
} */
//refference error

/* try{
console.log("Heya");
console.log("print",hello);
console.log("World");
}catch(error){
    console.log("continue with the script");
}//refference error */
/* 
try{
    setTimeout(function(){

    },1000)
}catch(err){
    console.log("won't work")
}//syncronous

setTimeout(() => {
    try{
        anbsldd;
    }catch(err){
        console.log("wont work")
    }
},1000);////asyncronous */

/* try{
jhhlkhl;
}catch(err){
    console.log("error name",err.name);
    console.log("error name",err.message);
   console.log("error name",err.stack);
} */

//debug json

/* 
let jsonData=`{"age":30}`;

try{
    let user=JSON.parse(jsonData);

    if(!user.name){
    throw new Error("Incomplete data:no more "+jsonData)
    }
    console.log(user.name);
}catch(err){
    console.log("JSON ERROR" + err.message)
}//JSON ERRORIncomplete data:no more {"age":30} */


function a(){
throw new Error("Error from a")
}
function b(){
    try{
        a();
    }catch(err){
        throw(err)
    }
}
function c(){
    try{
        b();
    }catch(err){
        console.log("error message"+ err.message)
    }
}
c();//error messageError from a