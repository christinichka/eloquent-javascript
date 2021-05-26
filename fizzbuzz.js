
for (let i = 1; i <= 100; i++) {
    let number = "";
    if (i % 3 == 0) number += "Fizz";
    if (i % 5 == 0) number += "Buzz";
    console.log(number || i);
}