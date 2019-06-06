class Vehicle{
    constructor(type,speed){
        this.type=type;
        this.speed=speed;
      
    }
    move(){
        console.log(`I am a ${this.type} ,moving at a speed of ${this.speed}`);
    };
    stop(){
        console.log(`I am a ${this.type} ,Stopped moving`);
    };
    static info(){
        console.log("Vehicle is a base vehicle class")
    } //static mean private..not inherated by intsnace
};

let RustCar=new Vehicle("Rusty Car",40);
RustCar.move();

RustCar.stop();

Vehicle.info();

//sub class

class Car extends Vehicle{
    constructor(speed){
        super("car",speed);
        this.abs=false;
    }
    //extend the stop Method
    emergencyStop(){
        console.log(`Car emergencyStop : ${this.type} , ${this.speed}`)
        this.abs=true;
       this.stop();
    }
}

let subcar=new Car(10);
console.log(subcar)

//subclass os subclass
class SubClass extends Car{
    constructor(){
        super(200);
        this.jet=false;
    }
    move(){
        console.log(`superCar move : ${this.type}, ${this.speed}`)
        this.jet=true;
        super.move();
    }
}

let coolcar=new SubClass();
console.group(coolcar);

coolcar.move();