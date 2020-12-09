var fs = require("fs");
// var input = fs.readFileSync("./inputs/test.txt", "utf8");
var input = fs.readFileSync("./inputs/day7.txt", "utf8");
let textsArray = input.split("\r\n");
// console.log({ textsArray });

let uniQueBags = [];
textsArray.forEach((string) => {
  objectify(string);
});

function objectify(string) {
  let splitString = string.split(" contain ");
  let partOne = splitString[0].replace(/ bags/g, "").replace(/ bag/g, "");
  let partTwoString = splitString[1]
    .replace(/ bags/g, "")
    .replace(/ bag/g, "")
    .replace(".", "");

  let partTwo = [];

  if (/,/g.test(partTwoString)) {
    let split = partTwoString.split(", ");
    split.forEach((el) => {
      partTwo.push(el);
    });
  } else {
    if (partTwoString !== "no other") {
      partTwo.push(partTwoString);
    }
  }

  let obj = {
    mainBag: partOne,
    inside: partTwo,
  };

  uniQueBags.push(obj);
}

let bagsToCount = ["shiny gold"];
let count = 0;

function countValidBags(obj) {
  for (let i = 0; i < obj.inside.length; i++) {
    if (obj.inside[i].includes("shiny gold")) {
      bagsToCount.push(obj.mainBag);
      // let string = obj.inside[i].replace(/^[0-9 ]+/, "");
      // console.log(bagsToCount);
      // count += bagsToCount.indexOf(string) > -1;
    }
  }
}

uniQueBags.forEach((a) => {
  countValidBags(a);
});

uniQueBags.forEach((a) => {});

console.log(bagsToCount);
console.log(count);
