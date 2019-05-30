console.log(":::::::::::::::::1::::::::::::::::::")
/* 1. Create a random quote generator! */
let quotes = ["Dont cry because its over, smile because it happened", "Be yourself; everyone else is already taken",
    "So many books, so little time.", "You only live once, but if you do it right, once is enough", "No one can make you feel inferior without your consent."];

let RandomQoutes = arr => {
    let random = Math.floor(Math.random() * arr.length);
    console.log(arr[random]);
};

RandomQoutes(quotes);


console.log(":::::::::::::::::2::::::::::::::::::");
/*  2. Create a random food generator for each day of the week!  */
let food = ["Mutanjan",
    "Aaloo Bukhary Ki Chutney.",
    " Dum Pukht",
    "Nihari.",
    "Shahi Tukda.",
    "Chargha.",
    "Paya."];
let weekDay = [
    "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

let Food = (arr, wd) => {

    wd.forEach(day => {
        let random = Math.floor(Math.random() * arr.length);
        console.log(`on ${day} we will cook ${arr[random]}`);
        arr.splice(random, 1);
    })
}
Food(food, weekDay);



console.log(":::::::::::::::::3::::::::::::::::::");
/* 3. Find out how many days there are till the end of a given month. */
let daystillEnd = month => {
    let date = new Date();
    let presentTime = new Date().getTime();
    let userTime = new Date(date.getFullYear(), month, 0).getTime();
    let timediffrence = userTime - presentTime;
    let days = Math.floor(timediffrence / (1000 * 60 * 60 * 24));
    console.log(days);
}
daystillEnd(08)

console.log(":::::::::::::::::4::::::::::::::::::");
/* 4. Create a function that accepts two strings as arguments. Check if these words are anagrams. */

let Anagrams = (word1, word2) => {
    let newword1 = word1.toLowerCase().split("");
    let newword2 = word2.toLowerCase().split("");
    let sorted = newword1.sort();
    let sorted2 = newword2.sort();
    for (let i = 0; i < newword1.length; i++) {

        if (sorted[i] !== sorted2[i]) {
            let result = "these words are not anagrams";
            return result;
        }
    }
    return ("these words are anagrams");
};


console.log(Anagrams("The Classroom", "School Master"));




console.log(":::::::::::::::::5::::::::::::::::::");
/* 5. Check what zodiac sign a person is depending on their birthdays! Zodiacs: aries, taurus, gemini etc. */


let ZodiacSign = arr => {
    let date = new Date(...arr);
    let month = date.getMonth();
    let day = date.getDate();
    let dm = `${month}${day}`;
    switch (true) {

        case (dm >= 120 && dm <= 218): {
            console.log("your Zodiac Sign is Aquarius");
            break;
        }

        case (dm >= 219 && dm <= 320): {
            console.log("your Zodiac Sign is Pisces");
            break;
        }
        case (dm >= 321 && dm <= 419): {
            console.log("your Zodiac Sign is Aries");
            break;
        }
        case (dm >= 420 && dm <= 520): {
            console.log("your Zodiac Sign is Taurus");
            break;
        }

        case (dm > 523 && dm <= 620): {
            console.log("your Zodiac Sign is Gemini");
            break;
        }
        case (dm >= 623 && dm <= 722): {
            console.log("your Zodiac Sign is Cancer");
            break;
        }
        case (dm >= 723 && dm <= 822): {
            console.log("your Zodiac Sign is leo");
            break;
        }

        case (dm >= 823 && dm <= 922): {
            console.log("your Zodiac Sign is Virgo");
            break;
        }

        case (dm >= 923 && dm <= 1022): {
            console.log("your Zodiac Sign is Libra");
            break;
        }
        case (dm >= 1023 && dm <= 1122): {
            console.log("your Zodiac Sign is Scorpio");
            break;
        }

        case (dm > 1123 && dm < 1221): {
            console.log("your Zodiac Sign is Sagittarius");
            break;
        }
        case ((dm > 1223 && dm <= 1231) || (dm > 001 && dm < 121)): {
            console.log("your Zodiac Sign is Sagittarius");
            break;
        }
    }
}



ZodiacSign([1983, 11, 11]);



/* let string="hello world";
let str=string.split(" ");
console.log(JSON.stringify(str)); */