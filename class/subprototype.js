function vehicle(type,speed){
    this.type=type;
    this.speed=speed;

}

vehicle.prototype.speed=80;
vehicle.prototype.type="Vehicle22222";
vehicle.prototype.wheels=4;
vehicle.prototype.move=function(){
    console.log(`I am a ${this.type} ,moving at a speed of ${this.speed}`);
};

//sub class(Car) of class(vehicle)
function Car(speed){
    vehicle.call(this,"car",speed);//explicit binding with vehicle object
}
vehicle.prototype.stop=function(){
    console.log(`I am a ${this.type} ,Stopped moving`);
};

Car.prototype=Object.create(vehicle.prototype);//vehicle prototypes now inherited by car
Car.prototype.emergencyStop=function(){
    this.abs=true;//abs is anti -breaking system
    this.stop();//inherite from vehicle class
}

let myCar=new Car(10);

myCar.move();
myCar.emergencyStop();