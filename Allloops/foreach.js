let arr=["apple","pear","mango"];
arr.forEach(function(elem){
    console.log(elem);
});

let array=[
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
];


array.forEach(function(elem){
    for(const key in elem){
        console.log(key+"   "+ elem[key])
    }
});

let task = [
    [
        "clean",
        "floor"
    ],
    [
        "clean",
        "windows"
    ],
    [
        "clean",
        "dining table"
    ],
    [
        "clean",
        "kitchen platform"
    ],
    [
        "cook",
        "the breakfast"
    ],
    [
        "clean",
        "the dishes"
    ],
    [
        "clean",
        "the desk"
    ],
];

/* task.forEach((elem,i)=>{
console.log(elem)
console.log(elem[i])
}); */


task.forEach(elem=>{
    switch(elem[0]){
        case "clean":
            console.log(`I am cleaning ${elem[1]}`)

            break;
        case "cook":
            console.log(`I am cleaning ${elem[1]}`);
            break;
        default:
            break;
    }
    });


/*     let task1={0:{clean:"floor"}};
    for(const key in task1){
        let first=task1[key];
        for(const key in first){
            console.log(key);
        }
       } 
       */
 let obj={};
 for(let i=0;i<task.length;i++){   
    let obj1={};     
         obj1[task[i][0]]=task[i][1];
         obj[i]=obj1;
 }
console.log(obj);

for(const key in obj){
    let innerobj=obj[key];
    for(const key in innerobj){
        if(key==="clean"){
            console.log(`I cleaned the ${innerobj[key]}`);
        }else{
            console.log(`I cooked the ${innerobj[key]}`);
        }
    }
}