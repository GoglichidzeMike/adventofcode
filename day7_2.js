var fs = require("fs");
// Get input data from document
// var input = fs.readFileSync("./inputs/test.txt", "utf8");
var input = fs.readFileSync("./inputs/day7.txt", "utf8");
let rows = input.split("\r\n").filter((row) => row.length);

const obj = {};
// Create object of every possible container bag color: containee bag color

rows.forEach((row) => {
  const rule = row.split("bags contain");

  obj[rule[0].trim()] = rule[1]
    .split(",")
    .map((bag) => bag.replace(/bags? ?|contains? ?|[0-9] ?|\./g, "").trim());
});

// Create `containers` object to hold all containers at each level.
// Returns number of uniquely colored found container (bag) colors

const countContainers = (color) => {
  let i = 1;
  let containers = {
    0: [color],
    1: [],
  };

  let result = [];
  while (true) {
    for (rule in obj) {
      containers[i - 1].forEach((c) => {
        if (obj[rule].includes(c)) {
          containers[i].push(rule);
        }
      });
    }

    if (containers[i].length === 0) {
      break;
    }
    result.push(containers[i]);
    i += 1;
    containers[i] = [];
  }
  return new Set(result.flat().sort()).size;
};

console.log(countContainers("shiny gold"));
