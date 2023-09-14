// -----------ternary operator---------

function experiencePoint() {
  if (winBattle()) {
    return 10;
  } else {
    return 1;
  }
}

var experiencePoint = winBattle() ? 10 : 1;

// -------------------------------
function user(bool) {
  return bool;
}

var answer = user(true) ? "this is your answer" : "this is not your answer";

// ----------Switch statement--------------

function moveCommand(direction) {
  var whatHappens;                                                           /* moveCommand("direction")*/
  switch (direction) {
    case "forward":                                                          /* undefined*/
      break;
      whatHappens = "your encounter a monster";         
    case "back":                                                             /*you arrived home */
      whatHappens = "you arrived home";
      break;
      break;                                        
    case "right":                                                            /*you found river */                     
      return (whatHappens = "you found river");
      break;
    case "left":                                                             /* undefined*/
      break;
      whatHappens = "you run into a troll";
      break;

    default:                                                               
      whatHappens = "Please enter a valid direction";
  }
  return whatHappens;
}
