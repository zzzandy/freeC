// #1

function convertCtoF(celsius) {
    return celsius * (9/5) + 32;
  }
  
  convertCtoF(30);

  // #2

  function reverseString(str) {
    let strN = Array.from(str).reverse().join().replaceAll(',',"");
    let strN2 = Array.from(str).reverse().join("");
    let str3 = str.split('').reverse().join("");
    return str3;
  }
  
  reverseString("hello");

  // #3

  function factorialize(num) {
    if(num <= 0) return 1
  
    return num * factorialize(num - 1) ;
  }
  
  factorialize(5);

  // #4

  function findLongestWordLength(str) {
    let count = 0;
    str.split(" ").filter((item) => {
      if(item.length >= count ){
        count = item.length
      }
    })
  
    return count;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

  // #5

  function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
  
    let re = new RegExp(target + "$", "i");
  
    return re.test(str);
  }
  
  console.log(confirmEnding("Bastian", "n"));

  // #6 

  function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
  }

  // #7

  function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
  }

  // #8

  function findElement(arr, func) {
    return arr.find(func);
  }

  // #9 
  
  function booWho(bool) {
    return typeof bool === "boolean";
  }
  
  // test here
  booWho(null);

  // #10

  function titleCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
      .join(" ");
  }
  
  titleCase("I'm a little tea pot");

  // #11

  function bouncer(arr) {
  
    return arr.filter((el) => {
      if(el) return el;
    });
  }
  
  bouncer([7, "ate", "", false, 9]);

  // #12

  function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
  }

  // #13

  function frankenSplice(arr1, arr2, n) {
    return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
  }

  // #14

  function mutation(arr) {
    const test = arr[1].toLowerCase();
    const target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }

  // #15

  function chunkArrayInGroups(arr, size) {
    // Break it up.
    const newArr = [];
    for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    return newArr;
  }

  // #16

 // The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

const filteredList = watchList.filter((el) => {
    return +el['imdbRating'] >= 8
  }).map((el) => {  
    return  {
      title : el['Title'],
      rating : el['imdbRating']
  }})


// Only change code above this line

console.log(filteredList);

// #17 


Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach((el, i, arr) => {
    //console.log(callback(el))
    if(callback(el, i, arr)) {newArray.push(el)}
    
  })
  // Only change code above this line
  return newArray;
};

// #18 

function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
  return anim.slice(beginSlice, endSlice)

  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

// #19

const squareList = arr => {
  // Only change code below this line

  return arr.filter((el) => Number.isInteger(el) && el > 0).reduce((accum, el) => {
    accum.push(el ** 2)
    return accum;
  }, []);
  // Only change code above this line
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);

// #20

function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

// #21 

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
   return [...arr].sort((a,b) => { 
     return a - b
  })

  // Only change code above this line
}

nonMutatingSort(globalArray);

console.log(nonMutatingSort([1, 30, 4, 21, 100000]))

// #22

function splitify(str) {
  // Only change code below this line
  let reg = /\W/gi;  
  return str.split(reg);

  // Only change code above this line
}

splitify("Hello World,I-am code");

// #23

function sentensify(str) {
  // Only change code below this line
  return str.split(/\W/gi).join(' ')

  // Only change code above this line
}

sentensify("May-the-force-be-with-you");

// #24

// Only change code below this line
function urlSlug(title) {
  return title.trim().toLowerCase().split(/\s+/).join('-')

}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
urlSlug(" Winter Is  Coming")

// #25

function checkPositive(arr) {
  // Only change code below this line
  return arr.every((el) => el > 0)

  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);

// #26

function checkPositive(arr) {
  // Only change code below this line
    return arr.some((el) => el > 0)

  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);

// #27

function sumAll(arr) {
  let a = Math.min(...arr);console.log(a)
  let b = Math.max(...arr);console.log(b)
  return (b - a + 1) * (a + b) / 2;
}

sumAll([1, 4]);

// #28

function diffArray(arr1, arr2) {
  const newArr = arr1.filter((el) => !arr2.includes(el)).concat(arr2.filter((el) => !arr1.includes(el)))
  console.log(newArr)
  return newArr;
}
//console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])


// #29 

function destroyer(arr, ...args) {
  return arr.filter((el) => !args.includes(el) );
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// #30

function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection
    .filter(obj => sourceKeys
      .every(key => obj[key] === source[key]));
}

// #31

function spinalCase(str) {
  return str.split(/\s+|_|(?=[A-Z])/).join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');

// #32

function translatePigLatin(str) {
  
  if(str.match(/^[aeiou]/i)){ return str + 'way'}

  let test = str.match(/^[^aeiou]+/i)[0]
  return str.substring(test.length) + test + 'ay';
}

translatePigLatin("rhythm");

// #33

function myReplace(str, before, after) {
  // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1)
  } else {
    after = after[0].toLowerCase() + after.substring(1)
  }

  // return string with argument "before" replaced by argument "after" (with correct case)
  return str.replace(before, after);
}

// #34

function myReplace(str, before, after) {
  

  return str.split(' ').map((el) => {
    if(el === before){
      if(el[0] === before[0].toUpperCase()){
        return after[0].toUpperCase() + after.slice(1)
      } else return el = after.toLowerCase()
      
    } else return el
  }).join(' ');
}

myReplace("I think we should look up there", "up", "Down")

// #35

function pairElement(str) {
  let newArr = [];
  str.split("").map((el) => {
    switch(el){
      case 'G':
      newArr.push(['G','C']);
      break;
      case 'C':
      newArr.push(['C','G']);
      break;
      case 'A':
      newArr.push(['A','T']);
      break;
      case 'T':
      newArr.push(['T','A']);
      break;

    }
  })
  return newArr;
}

pairElement("GCG");

// #36

function pairElement(str) {
  // create object for pair lookup
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  // map character to array of character and matching pair
  return str
    .split("")
    .map(x => [x, pairs[x]]);
}

// test here
pairElement("GCG");

// #37

