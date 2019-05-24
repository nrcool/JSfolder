let packMySuitCase=number=>{
  let string="";
    switch(number){
        
        case 0:{
           string="Your suitcase is empty!"
         
        }
        case 1:{
            string+="its Full!"
            return string;
        }
        case 2:{
            console.log("I pack my suitcase and take with me my red shirt, toy car.")
            break;
        }
        case 3:{
            console.log("I pack my suitcase and take with me my red shirt,toothbrush.")
            break;
        }

        case 4:{
            console.log("I pack my suitcase and take with me my red shirt, toy car, toothbrush, phone.")
            break;
        }
        case 5:{
            console.log("I pack my suitcase and take with me my red shirt, toy car, toothbrush, phone,and mobile charger as well")
            break;
        }
        case 6:{
            console.log("I  finished packing my suitcase")
            break;
        }
        case 7:{
            console.log("Your suitcase is full!");
            break;
        }
        default:{
            console.log("please Enter numbers from 0-7 .")
        }
    }
};

console.log(packMySuitCase(1));