//array contains objects
let ArrwithObj=[
    {a:2,b:4},
    {a:3,b:5},
    {a:4,b:6},
    {a:5,b:7}
];

ArrwithObj.forEach(elem=>{
    console.log(elem.b);
});

//nested Object;
/* find value of all Bs */
let obj={
    obj1: {a:2,b:4},
    obj2:{a:3,b:5},
    obj3:{a:4,b:6},
    obj4:{a:5,b:7}
};

for(var i in obj){
    console.log(i)//print all keys in obj;
    console.log(obj[i])//print value of keys in main object
    console.log(obj[i]["b"]);//print value of b in nexted objects;
}

//find values of inner object's 2nd key value;
let object={
    obj1: {a:2,b:4},
    obj2:{a:3,c:5},
    obj3:{a:4,d:6},
    obj4:{a:5,e:7}
};
console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::")
for(let i in object){
   console.log(i);
   console.log(object[i])
      let key=Object.keys(object[i])[1];
       console.log(object[i][key]);
}
