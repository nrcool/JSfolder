function vehicle(type,speed){
    this.type=type;
    this.speed=speed;

    this.move=function(){
        console.log(`I am a ${this.type} ,moving at a speed of ${this.speed}`);
    };

    this.stop=function(){
        console.log(`I am a ${type} ,Stopped moving`);
    };
}

let car=new vehicle("Car",80);
console.log(car);
car.move();
car.stop();

let truck=new vehicle("Truck",80);
console.log(truck);
truck.move();
truck.stop();

car.viper=function(){console.log("method added from outside")}
car.testing="tesing";

console.log(car);
console.log(car.testing)
car.viper();

car.stop=function()
{
    console.log("changes from outside");
}
car.stop();
//Class Theory (data, methods)
vehicle.stop=function (){
    console.log("hellllllllloooooooooooooo")
}
vehicle.stop();
//encaaptulation...is the technique of making the fields in a class private and providing access to the fields via public methods. If a field is declared private, it cannot be accessed by anyone outside the class.
//abstraction..Abstraction hides certain details and only show the essential features of the object. 
//instantiation create instance of object(new);
//inheritance
//polymorphism poly means multiples(task) morphism means methods.... Prototype