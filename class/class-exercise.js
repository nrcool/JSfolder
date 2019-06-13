/* 1. Person Class
Create a class called Person which accepts the name of a person as a string, and his/her age as a number. The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So for example, if John is 19 years old then the function describe of his object will return "John, 19 years old". */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        console.log(`${this.name} ,${this.age} years old`);
    }
}
let person1 = new Person("John", 19);
person1.describe();

console.log("::::::::::::::::::::2:::::::::::::::.");

/* 2. Volume
Write a JavaScript program to get the volume of a cylinder with four decimal places using object classes.
Note: Volume of a cylinder : V = πr2h - r is the radius and h is the height of the cylinder. */
class Volume {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }
    getVolume() {
        let V = Math.PI * this.radius * 2 * this.height;
        console.log(V.toFixed(4));
    }
}
let volume = new Volume(5, 10);
volume.getVolume();

console.log("::::::::::::::::3::::::::::::::::");
/* 3. Tick Tock
Rewrite the following code to use the "class" syntax. */
/* 3. Tick Tock
Rewrite the following code to use the "class" syntax. */

class Clock {
    constructor({ template }) {
        this.template={template};
        this.timer;
    }
    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        for(let key in this.template){
            let output = this.template[key].replace('h', hours).replace('m', mins).replace('s', secs);

           console.log(output); 
        }
    }

    stop() {
        clearInterval(this.timer);
    };

    start() {
        this.render();
     this.timer= setInterval(this.render.bind(this), 1000);
    };
}

let clock = new Clock({ template: 'h:m:s' });
clock.start(4000);


console.log(":::::::::::::::::5::::::::::::::::");
/*   4. TV Class
Create a TV class with properties like brand, channel and volume.
Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75". */

class TV {
    constructor(brand) {
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
    }
    increaseVolume(plus) {
        if (plus === "+") {
            this.volume++;
            if (this.volume > 100) {
                console.log("Volume is too high, Already Maximimum");
            }
        }
    }
    decreaseaseVolume(minus) {
        if (plus === "-") {
            this.volume--;
            if (this.volume < 100) {
                console.log("Volume is too Low, Already Minimum");
            }
        }
    }
    setChannel(number) {
        this.channel = number;
        if (this.channel > 50) {
            this.channel = 1;
        }
    }
    reset() {
        this.channel = 1;
        this.volume = 50;
    }
    getStatus() {
        console.log(`"${this.brand} at channel ${this.channel}, volume ${this.volume}"`);
    }
}
let newTv = new TV("Panasonic");
newTv.increaseVolume("+");
newTv.increaseVolume("+");
newTv.increaseVolume("+");
newTv.increaseVolume("+");
newTv.increaseVolume("+");
newTv.setChannel(34);
newTv.getStatus();

console.log(":::::::::::::::::6:::::::::::::::::")
/* 5. Circle
Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two getters getArea() (PIr^2) and getPerimeter() (2PI*r) which give both respective areas and perimeter (circumference).
Look at the example of a Rectangle constructor which can help you in getting started. */
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        let area = Math.PI * this.radius * this.radius;
        console.log(`Area of circle is ${area}`)
    }
    getPerimeter() {
        let perimeter = 2 * Math.PI * this.radius;
        console.log(`The Perimeter of circle is ${perimeter}`);
        this.getArea();
    }

}

let circle = new Circle(5);
circle.getPerimeter();