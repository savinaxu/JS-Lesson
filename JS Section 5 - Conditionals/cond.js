//Conditionals:
// If-Else statements

var name = 'John';
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes'){//the condition needs to be evaluated to true so that:
  console.log(name + ' is married');//this gets executed
} else { // and if its false
  console.log(name + ' will hopefully marry soon :)');//this gets executed
}

// comparason operator === returns a boolean T or F value
// isMarried is set to yes?
// it evaluates to false
// the else statement is returned.

//this allows us to make decisions with our code using Conditionals



isMarried = false;

if (isMarried){//much faster way, js figures out its false and we go into the else statement
  console.log('yes');
} else {
  console.log('no');
}
