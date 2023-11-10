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