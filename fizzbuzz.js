
// One way to do FizzBuzz
for (let i = 1; i <= 100; i++) {
    let number = "";
    if (i % 3 == 0) number += "Fizz";
    if (i % 5 == 0) number += "Buzz";
    console.log(number || i);
}

// A second way to do FizzBuzz
for (let number = 1; number <= 100; number++) {
  if (number % 3 == 0) {
    console.log("Fizz"); 
  }
  else if (number % 5 == 0) {
    console.log("Buzz");
  }
  else if (number % 5 == 0 && number == 3) {
  	console.log("FizzBuzz");
  }
  else {
  	console.log(number)
  }
  
}
