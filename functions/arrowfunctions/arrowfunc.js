console.log("---------------------------------1------------------------------");

let product=(num,num1)=> num*num1;
console.log(product(3,5));


console.log("---------------------------------2------------------------------");
let array=[3, 5, 67, 12, 34, 4, 9, 30];
let resultArray=[]
let DoubleTheOdds = arr=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            resultArray.push(arr[i]*2);
        }
    }
    return resultArray;
};
console.log(DoubleTheOdds(array));



console.log("---------------------------------3------------------------------");
let resultingArray=[];
let Loopyloop=arr=>{
    for(let i=0;i<arr.length;i++){
        resultingArray.push(arr[i]-10);
}
return resultingArray;
};

console.log(Loopyloop(array));

console.log("---------------------------------4------------------------------");
let cars={name:"BMW",model:"X7",manifacturingDATE:"10.01.2019" };
let car2= {name:"hhjkiW",model:"Xffff7",manifacturingDATE:"10.01.2019" };
let Cars=obj=>{
    for(let i=0;i<Object.keys(obj).length;i++){
    
        console.log(`${Object.keys(obj)[i]} : ${Object.values(obj)[i]}`);
    }
    console.log(Object.entries(obj))
} 
Cars(car2);

console.log("---------------------------------5------------------------------");

/* let numbers= [3,62,234,7,23,74,23,76,92]; */


let filterNum=(numbers,comparison)=> {
return numbers.filter(number=>
        number>comparison )};




console.log(filterNum([3,62,234,7,23,74,23,76,92],60));

console.log("---------------------------------6------------------------------");

let calcCircumfrence=radius=> 2 * radius * Math.PI;
console.log(calcCircumfrence(4));
let calcArea=radius=>radius * radius * Math.PI;
console.log(calcArea(6));

console.log("---------------------------------7------------------------------");

 const inventors = [{
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543
  },
  {
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947
  },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852
  },
  {
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905
  },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909
  }
];
let filterAccAge;
let filterBYNAME;
let inventorNames=[];
for(let i=0;i<inventors.length;i++){
filterAccAge=inventors.filter(inventor=> {
	return inventor.year >=1500 &&inventor.year<1600;
});
}
console.log(filterAccAge);
       
let SortByAge=inventors.sort((a, b) =>a.year-b.year);
console.log(SortByAge);

    for(let i=0;i<inventors.length;i++){
    let obj=`${inventors[i].first} ${inventors[i].last}`;
    inventorNames.push(obj);
    }
    console.log(inventorNames);


    let people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
      'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
      'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
      'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
      'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
      'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
      'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
      'Blair, Tony', 'Blake, William'
    ];

    let NEWARRAY=[];
 for(let i=0;i<people.length;i++){
    let eachName=people[i].split(", ");
     let revEachName= eachName.reverse().join(", ");
    NEWARRAY.push(revEachName);
 }
 

 let TestingARRAY=NEWARRAY.sort();

let FinalArray=[];
for(let i=0;i<TestingARRAY.length;i++){
  let eachName=TestingARRAY[i].split(", ");
   let revEachName= eachName.reverse().join(", ");
  FinalArray.push(revEachName);
}

console.log(FinalArray);

let peopleArray = [];
for (let i = 0; i < people.length; i++) {
   let name = people[i].split(", ");
   peopleArray.push(name);
}
let SortedArrNames=peopleArray.sort((a,b)=>{
    if(a[1] < b[1]) { return -1; }
    if(a[1] > b[1]) { return 1; }
    return 0;});
console.log(SortedArrNames)


