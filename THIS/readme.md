this Keyword
1. Modify
Modify the following code to use the 'this' keyword.

let person = {
  name: "John",
  job: 'teacher',
  sayJob: function() {return `This person is a ${person.job}`;}
};

person.sayJob();
2. Person
Look over the below code. Then try to add yourself as a new person object, similar to how myFather and myMother are created.
function person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");
3. Cars
Create a constructor function called cars (shown below). Fill in the blank parts in the constructor using this. The cars should have instance "brand","name","year" and "price". Also create 3 different objects using the constructor function, initialzing the instances whatever you want.

function cars() {
  // ...
}
4. Examine the following code
Write down your expected answers for the console.log() output.
let name = "Jay Global";
let person = {
    name: 'Jay Person',
    details: {
        name: 'Jay Details',
        print: function() {
            return this.name;
        }
    },
    print: function() {
        return this.name;
    }
};
console.log(person.details.print());  // ?
console.log(person.print());          // ?

let name1 = person.print;
let name2 = person.details;

console.log(name1()); // ?
console.log(name2.print()) // ?
5. call() an object
Given an object e.g.

let obj = {name: "Sandra"}
Create a greeting function with the parameters a, b -> city, country. Use the this keyword and call() to complete the task.

Expected output: Hi Sandra, welcome to Berlin, Germany!

Use apply() to incude the object in your function.

Expected output: Hi Sandra, welcome to Berlin, Germany!

Use bind() to include the object in your function.

Expected output: Hi Sandra, welcome to Berlin, Germany!

6. Look at the code snippets below, what is the output?
Code Snippet 1
let person = {
  firstName: "Penelope",
  lastName: "Barrymore",
  getName: function () {
    return this.firstName + " " + this.lastName;
  }
}

console.log(person.getName());

// insert answer here
Code Snippet 2
let o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};
console.log(o.f()); 

// insert answer here
Code Snippet 3
let player1 = {
  firstName: "Jack",
  lastName: "Black",
  getName: function () {
    return this.firstName + " " + this.lastName;
  }
}

let player2 = {
  firstName: "Bunny",
  lastName: "Rabbit",
  getName: function () {
    return this.firstName + " " + this.lastName;
  }
}

let game = {
  players: [],

  listPlayers: function () {
    this.players.forEach(function (player) {
      console.log(player.getName());
    });
  }
}

game.players.push(player1, player2);
game.listPlayers();

// insert answer here
Code Snippet 4
let Counter = {
   count: 0,
   add: function(){
     this.count++;
   }
}

Counter.add();
console.log(Counter.count);

// insert answer here
7. Function for multiple Objects
Create a function that sets a new age for a property in an object. Create 2 or three new objects for different people e.g. Sandra, Karl, Tim. Set the age of each object. Then, change their ages with your function!

8. GoT
Read over the following code. Then try to add Joffrey, Myrcella and Tommen into the House Lannister (Choose Cersei as parent).

function House(symbol) {
  this.symbol = symbol;
  this.lord = undefined;
}
function Person(name) {
  this.name = name;
  this.children = null;
  this.parent = null;
}

Lannister = new House('lion');
Tywin = new Person('Tywin');

Tyrion = new Person('Tyrion');
Cersei = new Person('Cersei');
Jamie = new Person('Jamie');

Lannister.lord = Tywin;
Tywin.children = [Jamie, Cersei, Tyrion];

Jamie.parent = Tywin;
Cersei.parent = Tywin;
Tyrion.parent = Tywin;

console.log(Lannister);
console.log(Tywin);
console.log(Cersei);