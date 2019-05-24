console.log(":::::::::::::::::::::1:::::::::::::::::::::::::");
let FindColor = color => {
    switch (color) {
        case "blue":
            console.log("Color passed as argument is Blue");
            break;
        case "red":
            console.log("Color passed as argument is Red");
            break;
        case "green":
            console.log("Color passed as argument is green");
            break;
        case "yellow":
            console.log("Color passed as argument is yellow");
            break;
        default:
            console.log("not found in any case");
    }
};
FindColor("red");

console.log(":::::::::::::::::::::2:::::::::::::::::::::::::");
let Grade = grade => {
    switch (grade) {
        case "A":
            console.log(" Superior (Honor)");
            break;
        case "B":
            console.log("Good");
            break;
        case "C":
            console.log(" Satisfactory");
            break;
        case "D":
            console.log(" Low Pass, but certifying");
            break;
        case "F":
            console.log("Failure");
            break;
            Default:
            console.log("Enter grade A,b,c,d,f");
    }
};
Grade("A");

console.log(":::::::::::::::::::::3:::::::::::::::::::::::::");

let getMonth = () => {
    let month = new Date().getMonth();
    switch (month) {
        case 0:
            console.log("It's the month of January!");
            break;
        case 1:
            console.log("It's the month of Febuary!");
            break;
        case 2:
            console.log("It's the month of March!");
            break;
        case 3:
            console.log("It's the month of April!");
            break;
        case 4:
            console.log("It's the month of May!");
            break;
        case 5:
            console.log("It's the month of June!");
            break;
        case 6:
            console.log("It's the month of July!");
            break;
        case 7:
            console.log("It's the month of August!");
            break;
        case 8:
            console.log("It's the month of September!");
            break;
        case 9:
            console.log("It's the month of October!");
            break;
        case 10:
            console.log("It's the month of November!");
            break;
        case 11:
            console.log("It's the month of December!");
    }
}
getMonth();