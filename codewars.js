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