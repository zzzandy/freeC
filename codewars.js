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