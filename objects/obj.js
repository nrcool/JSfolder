console.log("_______________________1__________________________");
const student = { firstName: "John", lastName: "Smith", class: 12 };

console.log(student.firstName+" "+student.lastName+" "+student.class);
let output=[];
for(let i=0;i<Object.keys(student).length;i++){
output.push(Object.keys(student)[i]);
}
console.log(output.join());
/* console.log(Object.keys(student)[0],Object.keys(student)[1],Object.keys(student)[2] ); */

console.log("_______________________2__________________________");
let std={
    firstName: "John",
    lastName:"Smith",
    age:41,
    occupation:"engineer",
    city:"France"
}

console.log(`${std.firstName} ${std.lastName} is a ${std.age} year old ${std.occupation} living in ${std.city}`);

console.log("_______________________3__________________________");

console.log(std);
delete std.city;
console.log(std);

console.log("_______________________4__________________________");
console.log(Object.keys(std).length);

console.log("_______________________5__________________________");
const library = [ 
    
    { author: 'J.K. Rowling', title: 'Harry Potter and the Chamber of Secrets', readingStatus: true },
    { author: 'Homer', title: 'The Odyssey', readingStatus: true },
    { author: 'Harper Lee', title: 'To Kill a Mockingbird', readingStatus: false }
];

console.log(`
Already read ${library[0].title} by ${library[0].author} Already read ${library[1].title} by ${library[1].author} You still need to read ${library[2].title} by ${library[2].author}`);

for(let i=0;i<Object.keys(library).length; i++){
    if(library[i].readingStatus===true){
        console.log(`Already read ${library[i].title} by ${library[i].author}`);
    }else{
        console.log(`You still need to read ${library[i].title} by ${library[i].author}`);
    }
    }
   