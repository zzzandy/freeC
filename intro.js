// #8
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// #9
let catName = "Oliver";
let catSound = "Meow!";

// #10
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

// #11
const sum = 10 + 10;

// #12
const difference = 45 - 33;

// #13
const product = 8 * 10;

// #14
const quotient = 66 / 33;

// #15
let myVar1 = 87;

// Only change code below this line
myVar = ++myVar;

// #16
let myVar2 = 11;

// Only change code below this line
myVar = --myVar;

// #17
const ourDecimal = 5.7;

// Only change code below this line

let myDecimal = 5.7;

// #18
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

// #19
let a1 = 11;
let b1 = 9;
let c1 = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

// #20
let a2 = 5;
let b2 = 12;
let c2 = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

// #21
let a3 = 48;
let b3 = 108;
let c3 = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

// #22
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

// #23
const myStr1 = '<a href="http://www.example.com" target="_blank">Link</a>';

// #24
const myStr2 = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

// #25
const myStr3 = "This is the start. " + "This is the end."; // Change this line

// #26
let myStr4 = 'This is the first sentence. ';
myStr4 += 'This is the second sentence.';

// #27
// Only change code below this line
const myName = "zzzandy";
const myStr5 = "My name is " + myName + ' and I am well!';

// #28
// Change code below this line
const someAdjective = "zzz";
let myStr6 = "Learning to code is ";
myStr += someAdjective;


// #29
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

// #30
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// #31
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

// #32
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

// #33
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// #34

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

// #35

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myNoun + ' ' + myVerb + ' ' + myAdjective + ' ' + myAdverb; // Change this line
// Only change code above this line

// #36
let count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:  count++; break;

    case 7:
    case 8:
    case 9:; break;

    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':  count--; break;
  }

   if (count > 0){
      return `${ count } Bet`
    }
    else if (count <= 0) {
      return `${ count } Hold`
    }
    
  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// #37
const myDog = {
    // Only change code below this line
    name: "test",
    legs: 4,
    tails: 1,
    friends: ['Test', 'test2'],
  
    // Only change code above this line
  }

// #38

// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Change this line

// #39
// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  const entreeValue = testObj['an entree'];   // Change this line
  const drinkValue = testObj['the drink'];    // Change this line

// #40
// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj[playerNumber];   // Change this line

// #41
// Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line
  myDog.name = 'Happy Coder';

// #42

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  myDog.bark = 'woof';

// #43
// Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  // Only change code below this line
  delete myDog.tails;

// #44

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line

  let lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  }
  result = lookup[val]

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
// #45


// #40
// #40
// #40
// #40
