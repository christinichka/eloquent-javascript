// isEven is a function with one parameter, n which represents a number
function isEven(n) {
  // if n is 0 it is even
  if (n == 0) {  
    return true;
  }
  // if n is 1 it is odd
  else if (n == 1) {
    return false;
  }
  // if n is negative rules still apply
  else if (n < 0) {
    return isEven(-n);
  }
  // the status of all other n can be determined with n -2 
  else {
    return isEven(n - 2);
  }
}  

// Test cases
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
