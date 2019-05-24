const day = new Date().getDay();

let DayoftheWeek;
switch (day) {
    case 0:
        DayoftheWeek = "Sunday.";
        break;
    case 1:
        DayoftheWeek = "Monday.";
        break;
    case 2:
        DayoftheWeek = "Tuesday.";
        break;
    case 3:
        DayoftheWeek = "Wednesday.";
        break;
    case 4:
        DayoftheWeek = "Thursday.";
        break;
    case 5:
        DayoftheWeek = "Friday.";
        break;
    case 6:
        DayoftheWeek = "Saturday.";
        break;

}
console.log(DayoftheWeek);


switch (day) {
    case 0:
        text = "Today is Sunday";
        break;
    case 6:
        text = "Today is Saturday";
        break;
    default:
        text = "Looking forward to the Weekend";
}
console.log(text);

const x = "0";
switch (x) {
    case 0: text = "Off"; break;
    case 1: text = "On"; break;
    default: text = "No Value found";
}
console.log(text);

let name = "john";

switch (name) {
    case "john":
        statement = `this is ${name}`;
        break;
    case "David":
        statement = `this is ${name}`;
        break;
    case "Sam":
        statement = `this is ${name}`;
        break;
    case "Harry":
        statement = `this is ${name}`;
        break;
    default:
        statement = `this is John`;
        break;
}

console.log(statement);


const age = 12;

switch (age) {
    case 10:
        remark = "its time for school";
        break;
    case 15:
        remark = "You cannot aply for the university";
        break;
    default:
        remark = "Welcome to College";
}

console.log(remark);

let date=new Date();

 switch (date.getFullYear()){
    case 2019: 
    {   
        console.log("Year is 2019");
        switch (date.getMonth()){
            case 4:{
                console.log("Month is May");
                switch(date.getDate()){
                    case 21:console.log(date);
                }
                break;
            }
            break;
        }
        break;
    }
} 