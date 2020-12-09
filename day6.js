var fs = require("fs");
var inputs = fs.readFileSync("./test.txt", "utf8");
const groups = inputs.replace(/\r\n/g, "\n").split("\n\n");

// PART 1

let buffer = "";
let uniqueValues = "";
let count = 0;

groups.forEach((group) => {
  unique_char(group);
  uniqueValues = uniqueValues.replace("\n", "");
  count += uniqueValues.length;
  uniqueValues = "";
});

function unique_char(str) {
  buffer = str;
  for (var x = 0; x < buffer.length; x++) {
    if (uniqueValues.indexOf(buffer.charAt(x)) == -1) {
      uniqueValues += buffer[x];
    }
  }
  return uniqueValues;
}

console.log("part 1 " + count);
// PART 2
