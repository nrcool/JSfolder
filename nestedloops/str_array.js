 console.log("STRING METHODS")
console.log("--------------1-----------------");
let str="Javascript";
console.log(typeof str);


console.log("--------------2-----------------");
if(str===""){
    console.log("string is Empty");
}else{
    console.log("String contains characters");
}


console.log("--------------3-----------------");
let text= "I like to walk in the park";
let text1=text.split(" ");
console.log(text1);


console.log("--------------4-----------------");
let name="John Smith";
let newname=name.split(" ");
console.log(newname[0]+" "+newname[1][0]+".");

console.log("--------------5-----------------");

let email="john_smith@example.com" //-> "john...@example.com"
let c_email;
let index=email.indexOf("@");
if(index!=-1){
c_email=email.replace(email.substring(2,index),"....");
console.log(c_email)
}


console.log("--------------6-----------------");

let str1="John Smith from Berlin";
let str2=str1.split(" ");
console.log(str2.join("-"));


console.log("--------------7-----------------");

let n="John smith"     //-> "johnSmith"
n=n.toLowerCase();
let n1=n.split(" ");
let camelcase=n1[1][0].toUpperCase();
let rstring=n1[1].substring(1);
let nameNew=n1[0]+camelcase+rstring;
console.log(nameNew);

console.log("-------------8-----------------");
let arr=["","first","second","third","fourth","fifth","seventh","eighth","nineth","tenth"];
let inp= 2;
let newarr=[];
for(let i=0;i<arr.length;i++){
    if(i===0){
        newarr.push(arr[i])
    }else{
        newarr.push(i+arr[i].slice(-2));
    }

}
console.log(newarr.join());


let numb=43211;
let numb1=numb.toString().split("");
console.log(numb1)
if(numb1.length>1 && (numb1[numb1.length-2]==='1')) {
console.log(numb+"th");
}else if(numb1[numb1.length-1]=='1'){
console.log(numb+"st");
}else if(numb1[numb1.length-1]=='2'){
    console.log(numb+"nd");
}else if(numb1[numb1.length-1]=='3'){
    console.log(numb+"rd");
}else{
    console.log(numb+"th");
}









console.log("--------------9-----------------");

let st="characters";
let sts=st.split("");
let sto=sts.sort().join("");
console.log(sto);


console.log("--------------10-----------------");

let num=14;
let result="";

for(let i=0;i<num;i++){
   result+="- "
}
console.log(result);


console.log("ARRAY METHODS")

console.log("--------------1-----------------");

let years=["2002","2016","1900","2011","2100","2095","2004","2022","1997","2012","1982"];

for(let i=0;i<years.length;i++){
    if((years[i]%4===0||years[i]%400===0)&&years[i]%100!==0){
        console.log(years[i]+" is a leap year");
    }
}

console.log("--------------2-----------------");

let array1=[5, 10, 15, 20, 25], array2=["javascript", 13, null, false, true], array3=[undefined, 4, "6", "hello", null];

let new1=[];
for(let i=0;i<array1.length;i++){
    if(i==0||i==array1.length-1){
        new1.push(array1[i]);
    }
}
console.log(new1);
let new2=[];
for(let i=0;i<array2.length;i++){
    if(i==0||i==array2.length-1){
        new2.push(array2[i]);
    }
}
console.log(new2);
let new3=[];
for(let i=0;i<array3.length;i++){
    if(i==0||i==array3.length-1){
        new3.push(array3[i]);
    }
}
console.log(new3);

console.log("--------------3-----------------");

let ar=[34, 15, 88, 2] , ar1= [34, -345, -1, 100] ,ar2= [-76, 1.345, 1, 0] ,ar3= [0.4356, 0.8795, 0.5435, -0.9999];
let smallestnum=ar1[0];
for(let i=0;i<ar1.length;i++){
    for(let k=0;k<ar1.length;k++){
        if(smallestnum>=ar1[k]){
                smallestnum=ar1[k];  
        }
    }
}
console.log(smallestnum);






/* for(let i=0;i<ar1.length;i++){
    for(let k=0;k<ar1.length;k++){
        if(ar1[i]<=ar1[k]){
            let b=ar1[k];
            let c=ar1[i];
            ar1[k]=c;
            ar1[i]=b; 
            
        }
    }
}
 console.log(ar1);
console.log(ar1[0]);  */

console.log("--------------4-----------------");
let arraynames=[ { name: "Steve"}, { name: "Mike"}, { name: "John"} ];
let namearray=[];
for(let i=0;i<arraynames.length;i++){

    namearray.push(arraynames[i].name);
}
console.log(namearray);

console.log("--------------5-----------------");
let v="happy";
let v1=""
let v2=[];
for(let i=0;i<v.length;i++){
    v1+=v[i];
    v2.push(v1);
}
console.log(v2); 


