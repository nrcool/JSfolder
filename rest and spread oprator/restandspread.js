function sUUm(a, b) {
    return a + b;
 }
 console.log(sUUm(10, 20, 50, 10, 38, 19)); //30
 
 //-----------------//
 console.log(":::::::::::::::::::::Spread:::::::::::::::::")
 function sUUmAll(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    console.log(args)
    return sum;
 }

 console.log(sUUmAll(10, 20, 50, 10, 38, 19)); //147
 console.log(sUUmAll(10)); //10
 console.log(sUUmAll(10, 20)); //30
 console.log(sUUmAll("Hel", "lo")); //0Hello
 
 //-----------------//
 
 function test (a)
 {
    console.log(a);
    console.log(arguments);
 }
 test(1,2)
 // 1
 //[Arguments] { '0': 1, '1': 2 }
 
 //-----------------//
 
 function showName (firstName, lastName, ...titles) {
    console.log(`${firstName} ${lastName}`);
    console.log(titles);
    console.log(titles[0]);
    console.log(titles[1]);
    console.log(titles.length);
 }
 showName("Max","Mustermann","EXTRA1","EXTRA2","EXTRA3");
 // Max Mustermann
 // [ 'EXTRA1', 'EXTRA2', 'EXTRA3' ]
 // EXTRA1
 // EXTRA2
 // 3
 
 //-----------------//
 // OLD STYLE TO USE arguments - better now to use ...args
 function showNameTwo ()
 {
 console.log(arguments.length);
 console.log(arguments);
 console.log(arguments[1]);
 }
 showNameTwo();
 // 0
 // [Arguments] {}
 // undefined
 showNameTwo(1,2,3);
 // 3
 // [Arguments] { '0': 1, '1': 2, '2': 3 }
 // 2
 
 //-----------------//
 console.log("///");
 
 function funcT() {
    let showArg = () => console.log(arguments[0])
    showArg();
 }
 // NOT GOOD TO USE ARGUMENTS!
 
 // WHY TO USE SPREAD OPERATORS:
 let myARR = [3,4,53,12,65,1]
 console.log(Math.max(myARR)); //NaN (Not possible with Math)
 console.log(Math.max(myARR[0],myARR[1],myARR[2],myARR[3],myARR[4],myARR[5])); //65
 console.log(Math.max(...myARR)); //65
 console.log(...myARR);
 console.log(myARR);

 console.log(":::::::::::::::.merge array.....")
 let arr1=[3,4,65,7,8,3]
 let arr2=[3,6,4,5,7,8,4,3,9]
 let merge=[0,7,...arr2];

 console.log(merge);
 console.log(...merge);

 let h="hello";
 /* let spread=(...h); */
 console.log(...h);



 let test2=(...arr1)=>{
     console.log(...arr1);
 }
 test2(...arr1);