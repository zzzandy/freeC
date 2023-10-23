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
function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  } else {
    return "Not Found";
  }  
  // Only change code above this line
}

// #46

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
   {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
];

// #47

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside['glove box'];

// #48

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

// #49

// Setup
const myArray = [];

// Only change code below this line
let i = 0;
while ( i <= 5) {
  myArray.push(i);
  i++;
}
console.log(myArray)

myArray.reverse()
console.log(myArray)

// Setup
const myArray = [];

// Only change code below this line
let i = 5;
while ( i >= 0) {
  myArray.push(i);
  i--;
}
console.log(myArray)

//myArray.reverse()
console.log(myArray)

// #50

// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i <= 5; i++){
  myArray.push(i)
}

console.log(myArray)

// #51

// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i < 10; i += 2){
  myArray.push(i)
}
console.log(myArray)

// #52

// Setup
const myArray = [];

// Only change code below this line
for (let i = 9; i >= 1; i-= 2){
  myArray.push(i)
}
console.log(myArray)

// #53

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line

let total = 0;
for( let i = 0; i <= myArr.length - 1; i++){
  total += myArr[i];
  console.log(total)
}

console.log(total)

// #54

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for(let i = 0; i <= arr.length - 1; i++){
    //console.log(arr[i])
    for (let j = 0; j <= arr[i].length - 1; j++){
      //console.log(arr[i][j])
      product *= arr[i][j]
    }
    console.log(product)

  }
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// #55

// Setup
const myArray = [];
let i = 10;

// Only change code below this line

do{
  myArray.push(i);
  i++;
}
while(i == 10)

// #56
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if(!value){
    delete records[id][prop]
  }

  if(prop !== 'tracks' && prop && value){
    records[id][prop] = value;
  }

  if(prop === 'tracks' && prop && value){
     if(!records[id].hasOwnProperty(prop)){
      records[id][prop] = [];
    }
    if(records[id].hasOwnProperty(prop)){
      records[id][prop].push(value)
    }

  }

  return records;
}

//updateRecords(recordCollection, 5439, 'artist', 'ABBA');
updateRecords(recordCollection, 5439, 'artist', '');

// #57
function sum(arr, n) {
  // Only change code below this line
    if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  // Only change code above this line
}

// #58
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {

  // Only change code below this line
  for(let i = 0; i < contacts.length; i++){

      if(contacts[i].firstName === name){

      if(!contacts[i].hasOwnProperty(prop)){
        return 'No such property';
      }
      return contacts[i][prop]
      }      
  }
  return 'No such contact';
  // Only change code above this line
}

//lookUpProfile("Kristian", "lastName");
lookUpProfile("Bob", "number");
lookUpProfile("Akira", "address");

// #59

function convertToInteger(str) {
  return parseInt(str)
  }
  
  convertToInteger("56");

// #60

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");

// #61

function checkEqual(a, b) {
  return a === b ? 'Equal' : 'Not Equal'
  }
  
  checkEqual(1, 2);

// #62
function checkSign(num) {
return (num === 0) ? 'zero':
(num > 0) ? 'positive' :
'negative' 
}

checkSign(10);


// #63

// Only change code below this line
function countdown(n){
  if(n < 1) { return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n)
    return arr;
  }
}
console.log(countdown(5));
// Only change code above this line

// #64

function rangeOfNumbers(startNum, endNum) {
  if(startNum > endNum) return [];
  else {
    const arr = rangeOfNumbers(startNum, endNum - 1);
    console.log(arr);
    arr.push(endNum)
    //console.log(arr);
  
    return arr;
  }
};
  
rangeOfNumbers(1,5)
// #60
// #60
// #60
// #60
// #60
// #60
// #60



