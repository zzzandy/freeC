// #1
function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  // #2 
  const s = [5, 7, 2];
  function editInPlace() {
    // Only change code below this line
  return s.sort()
    // Using s = [2, 5, 7] would be invalid
  
    // Only change code above this line
  }
  editInPlace();

  // #3
  function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);
  
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

  // #4

  const magic = () => {
    return new Date();
  };

  // #5
  const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

// #6

// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line

// #7


