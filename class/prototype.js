function Vehicle(type,speed){
    this.type=type;
    this.speed=speed;

}

Vehicle.prototype.speed=80;
Vehicle.prototype.type="Vehicle22222";
Vehicle.prototype.wheels=4;
Vehicle.prototype.move=function(){
    console.log(`I am a ${this.type} ,moving at a speed of ${this.speed}`);
};

Vehicle.prototype.stop=function(){
    console.log(`I am a ${this.type} ,Stopped moving`);
};

let car=new Vehicle("car",100);
console.log(car);
console.log(car.wheels);


//we can add properties and methods in Vehicle using prototype and every instance of Vehicle will inherate these properties;