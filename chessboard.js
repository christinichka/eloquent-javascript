let str = "";
size = 8; //length of each row
for (let i = 0; i < size; i++) { //outer loop handles the lines
    for (let j = 0; j < size; j++) { //inner loop handles the characters
        if ((i + j) % 2 == 0) { //if the sum of two counters is even
            str += " ";
        } else {
            str += "#";
        }
    }
    str += "\n" //terminate line by adding a new line
}
console.log(str);