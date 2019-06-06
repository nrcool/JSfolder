/* Print your answers to the console.
Write a program to list the properties of an object. E.g. const student = { firstName: "John", lastName: "Smith", class: 12 }; Expected Output: firstName, lastName, class */
console.log("::::::::::::::::::::::::::1::::::::::::::::::::::");
function std(firstname,lastname,clas){
this.firstname=firstname;
this.lastname=lastname;
this.class=clas;
}

//new binding
let student=new std("john","smith",41);


console.log(student.firstname);
console.log(student.lastname);
console.log(student.class);


/* Create a person object. Include the person's first and last name, age, job, city etc. Then print text by retrieving data from the object e.g. "John Smith is a 41 year old engineer living in France". */

console.log("::::::::::::::::::::::::::2::::::::::::::::::::::");

let studentobj={
    firstname:"john",
    lastname:"smith",
    age:41,
    profession:"engineer",
    city:"France"
}
function print(){
console.log(`${this.firstname} ${this.lastname} is a ${this.age} year old ${this.profession} living in ${this.city}`);
}
//Explicit bindinbg
print.call(studentobj);


console.log("::::::::::::::::::::::::::3::::::::::::::::::::::");
/* Write a JavaScript program to delete the "class" property (or last property) from the previous object */

function del(){
    let keysarray=Object.keys(this);
    delete this[keysarray[keysarray.length-1]];
    console.log(this);
}

//Explicit binding
del.call(studentobj);


console.log("::::::::::::::::::::::::::4::::::::::::::::::::::");
/* Write a program to get the length of a JavaScript object. */

function length(){
    let length=Object.keys(this);
    console.log(length.length);
}
length.call(studentobj);


console.log("::::::::::::::::::::::::::5::::::::::::::::::::::");
/* Write a program to display the reading status (i.e. display book name, author name and reading status) of the following books.  E.g. Output: Already read Harry Potter and the Chamber of Secrets by J.K. Rowling Already read The Odyssey by Homer You still need to read To Kill a Mockingbird by Harper Lee */

const library =  [{ author: 'J.K. Rowling', title: 'Harry Potter and the Chamber of Secrets', readingStatus: true }, { author: 'Homer', title: 'The Odyssey', readingStatus: true }, { author: 'Harper Lee', title: 'To Kill a Mockingbird', readingStatus: false }];

 function Readingstatus(){
     for(let i=0;i<this.length;i++){
        if(this[i].readingStatus){
            console.log(`Already read ${this[i].title} by ${this[i].author}`);
        }else{
            console.log(`You still need to read ${this[i].title} by ${this[i].author}`); 
        }
     }
} 
Readingstatus.call(library);