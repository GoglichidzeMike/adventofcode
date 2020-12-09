var fs = require("fs");
var inputs = fs.readFileSync("./day6.txt", "utf8");
const groups = inputs
  .replace(/(\r\n|\n|\r)/gm, " ")
  .replace(/  +/g, "\n")
  .replace(/ +/g, "")
  .split("\n");

// PART 1
let yesCounter = 0;
groups.forEach((a) => {
  yesCounter += new Set(a).size;
});
console.log(yesCounter);

const secondGroups = inputs.replace(/\r\n/g, "\n").split("\n\n");
let sameAnswerCounter = 0;

secondGroups.forEach((group) => {
  let answers = group.split("\n");
  let firstAnswer = answers[0];

  [...firstAnswer].forEach((char) => {
    sameAnswerCounter += answers.every((a) => a.indexOf(char) > -1);
  });
});
console.log({ sameAnswerCounter });
