let str= "hello world from Naqvi";
console.log(str.indexOf("l"));

let str1="locate string locate";
let count=0;
for(let i=0;i<str1.length;i++){
    let a=str1.indexOf("locate",i)
    
   /*  if((a!=-1)){
        count++;
    } */
}
console.log(count)

console.log(str.search("world"));

console.log(str.slice(2,8));//accept negative value

console.log(str.substring(2,8));//doesnot accept negative values


console.log(str.substr(2,8));//2 is starting and 8 is length


console.log(str.replace(/l/g,"m"));

console.log("strings are immutable and arrays are mutable");

console.log(str.includes("l"));

console.log(str.match("l"));

console.log(str.charAt(8))

let myString = `locate locare locate 'locate'`;
let i = 0
let j = 0;
let searchString = "locate";
for (i = 0; i < myString.length; i++) {
    result = myString.indexOf(searchString, i);

    if (result == -1) {
        console.log(result)
        i = myString.length;
    } else {
        i = result;
        j++
    }
    //console.log(result);
}
console.log(j);