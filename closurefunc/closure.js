

//closure

function makeAddrer(x){
    function add(y){
        return y+x;
    }
    return add;
}
let plusone= makeAddrer(1);

let plusten= makeAddrer(10);

console.log(plusone(3));//4
console.log(plusten(10));//20


function makeTitler(x){
    function title(y){
        return `${x} ${y}`
    }
    return title;
}

let mrTitle=makeTitler("Mr.");
let msTitle=makeTitler("Ms");

console.log(mrTitle("John"));//Mr. John
console.log(msTitle("Lara"));//Ms Lara

console.log(makeTitler("Dr.")("Jane"));//Dr. Jane
console.log(makeTitler("Prof.")("Mark"));//Dr. Jane



