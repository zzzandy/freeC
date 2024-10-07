const rps = (p1, p2) => {
const rules = {
rock: 'scissors',
scissors: 'paper',
paper: 'rock'
}

if(p1 === p2) return "Draw!"

if(rules[p1] === p2){
return 'Player 1 won!'
} else {
return 'Player 2 won!' 
}
};


function circleArea(circle){
return Math.PI * circle.radius ** 2
}

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
return (distanceToPump <= mpg * fuelLeft) ? true : false
}

function toBinary(n){
return +n.toString(2);
}

function enough(cap, on, wait) {
if(cap >= on + wait) return 0
return wait - (cap - on )
}

function squareSum(numbers){
return numbers.reduce((sum, num) => sum + (num * num), 0);

}

var min = function(list){
list.sort((a,b) => a - b)
return list[0];
}

var max = function(list){
list.sort((a,b) => a - b).reverse()
return list[0];
}

function countPositivesSumNegatives(input) {
if (input == null || input.length == 0) { return [] }
let arr = [];
arr[0] = input.filter((el) => el > 0).length;
arr[1] = input.filter((el) => el < 0).reduce((a, b) => a + b);
return arr  

}

function twoDecimalPlaces(n) {
return Number(n.toFixed(2))
}


function sayHello(name) {
return `Hello, ${name}` 
}

function hero(bullets, dragons){
return (dragons * 2 ) <= bullets ? true : false;
}

String.prototype.toAlternatingCase = function () {

return this.split('')
    .map((el) => el === el.toUpperCase() ? el.toLowerCase(): el.toUpperCase())
    .join('')
}

function basicOp(operation, value1, value2){
    let formula = value1 + operation + value2; 
    return eval(formula)
  }

  function divisibleBy(numbers, divisor){
    return numbers.filter((el) => el % divisor == 0 )
  }

  function combineNames(firstName, lastName){ 
    return `${firstName} ${lastName}`
  }
  
  function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc,el) => acc + el, 0);
  }

  class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height
    }
  }