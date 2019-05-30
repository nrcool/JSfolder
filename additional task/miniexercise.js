/* 1. Hitting the Jackpot
Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

Example:
testJackpot(["@", "@", "@", "@"]) ➞ true
testJackpot(["abc", "abc", "abc", "abc"]) ➞ true
testJackpot(["SS", "SS", "SS", "SS"]) ➞ true
testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false
testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false */
console.log("::::::::::::::::::1::::::::::::::::");

let testJackpot=arr=>{
  for(let i=0;i<arr.length-1;i++){
      if(arr[i+1]!==arr[i]){
          return false;
      }
  }
    return true;
}
console.log(testJackpot(["@", "@", "@", "@"]) );
console.log(testJackpot(["abc", "abc", "abc", "abc"]));
console.log(testJackpot(["SS", "SS", "SS", "SS"]));
console.log(testJackpot(["&&", "&", "&&&", "&&&&"]));
console.log(testJackpot(["SS", "SS", "SS", "Ss"]));




/* 2. Sudoku
A Sudoku is a 9x9 grid that is completed when every 3x3 square, row and column consist of the numbers 1-9. For this task, you will be given a completed 3x3 square, in the form of a two-dimensional array. Create a function that checks to make sure this 3x3 square contains each number from 1-9 exactly once. Make sure there are no duplicates, and no numbers outside this range.

isMiniSudoku([[1, 3, 2], [9, 7, 8], [4, 5, 6]]) ➞ true
isMiniSudoku([[1, 1, 3], [6, 5, 4], [8, 7, 9]]) ➞ false // The 1 is repeated twice
isMiniSudoku([[0, 1, 2], [6, 4, 5], [9, 8, 7]]) ➞ false // The 0 is included (outside range)
isMiniSudoku([[8, 9, 2], [5, 6, 1], [3, 7, 4]]) ➞ true */
console.log("::::::::::::::::::1::::::::::::::::");

let isMiniSudoku=(arr)=>{
    let newarray=[];
    for(let i=0;i<arr.length;i++){
        newarray.push(...arr[i]);
    }
    for(let a=0;a<newarray.length-1;a++){
          {
                if((newarray[a+1]===newarray[a]) || (newarray[a]<1||newarray[a]>9)){
                    return false;
                }
            }     
    }
    return true;
}
console.log(isMiniSudoku([[1, 3, 2], [9, 7, 8], [4, 5, 6]]));
console.log(isMiniSudoku([[1, 1, 3], [6, 5, 4], [8, 7, 9]]));
console.log(isMiniSudoku([[0, 1, 2], [6, 4, 5], [9, 8, 7]]));
console.log(isMiniSudoku([[8, 9, 2], [5, 6, 1], [3, 7, 4]]));


console.log("::::::::::::::::::3::::::::::::::::")
/* 3. Uno
Write a function that takes in two arguments: (1) a player's current hand and (2) the current face-up card on the table. The function will return true if the player can make a play, or false if the player has to draw from the deck.
A player can make a play if either: They have a card that is the same color as the face-up card. They have a card that is the same number as the face-up card.
canPlay(["yellow 3", "yellow 7", "blue 8", "red 9", "red 2"], "red 1") => true
// Since the player has two red cards, and the face-up card is red.
canPlay(["yellow 3", "yellow 7"], "blue 7") => true
// Since the player has a 7, and the face-up card is a 7. */


let canPlay=(cards,faceUpcard)=>{
    for(let i=0;i<cards.length;i++){
        if(cards[i].split(" ")[0]===faceUpcard.split(" ")[0]||cards[i].split(" ")[1]===faceUpcard.split(" ")[1] ){
            return true;
        }
    }
    return false;
};
console.log(canPlay(["yellow 3", "yellow 7", "blue 8", "red 9", "red 2"], "red 1"));
console.log(canPlay(["yellow 3", "yellow 7"], "Blue 7"));
console.log(canPlay(["yellow 2", "yellow 7", "blue 8", "red 9", "red 2"], "black 1"));



/* 4. Checkerboard
Create a function that returns true if the two-dimensional n x n input array has a checker-board pattern.

Examples
isCheckerboard([
  [1, 1],
  [0, 1]
]) ➞ false

isCheckerboard([
  [0, 1],
  [1, 0]
]) ➞ true

isCheckerboard([
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 1, 1, 1]
]) ➞ false

isCheckerboard([
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1]
]) ➞ true */

console.log(":::::::::::::::4:::::::::::::::");

let isCheckerboard=arr=>{
    for(let a=0;a<arr.length;a++){
       for(let i=0;i<arr[a].length-1;i++){
           if(arr[a][i+1]===arr[a][i]){
               return false;
           }
       }
    }
    return true;
};

console.log(isCheckerboard([
    [1, 1],
    [0, 1]
  ]));
console.log(isCheckerboard([
    [0, 1],
    [1, 0]
  ]));
console.log(isCheckerboard([
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 1, 1]
  ]));
console.log(isCheckerboard([
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1]
  ]));


console.log("::::::::::::::::::5:::::::::::::.::")
/*   5. Highest Pair
You will be given a collection of five cards (representing a player's hand in poker). If your hand contains at least one pair, return an array of two elements: true and the card number of the highest pair (trivial if there only exists a single pair). Else, return false.

Examples
highestPair(["A", "A", "Q", "Q", "6" ]) ➞ [true, "A"]
highestPair(["J", "6", "3", "10", "8"]) ➞ false
highestPair(["K", "7", "3", "9", "3"]) ➞ [true, "3"]
highestPair(["K", "9", "10", "J", "Q"]) ➞ false
highestPair(["3", "5", "5", "5", "5"]) ➞ [true, "5"] */

let highestPair=arr=>{
    let obj={};
    arr.forEach(element=>{
        if(!obj[element]){
            obj[element]=1;
        }else{
            obj[element]++;
        }
    });
   let result=[];

    for(let key in obj){
        if(obj[key]>1){
        result.push(true,key);
        }
        
    }
    if(result.length===0){
        result.push(false);
    }
    return result;
};
console.log(highestPair(["A", "A", "Q", "Q", "6" ]));
console.log(highestPair(["J", "6", "3", "10", "8"]));
console.log(highestPair(["K", "7", "3", "9", "3"]));
console.log(highestPair(["K", "9", "10", "J", "Q"]));
console.log(highestPair(["3", "5", "5", "5", "5"]))
