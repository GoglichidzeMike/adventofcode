var fs = require("fs");
var input = fs.readFileSync("./day5.txt").toString();
let textArray = input.split("\r\n");

const numberOfRows = 127;
const numberOfColumns = 7;

const listOfRows = [];
let finalRowValue = [];

const listOfColumns = [];
let finalColumnValue = [];

let listOfSeats = [];
let highestId = 0;

for (let i = 0; i < numberOfColumns + 1; i++) {
  listOfColumns.push(i);
  finalColumnValue.push(i);
}

for (let i = 0; i < numberOfRows + 1; i++) {
  listOfRows.push(i);
  finalRowValue.push(i);
}

const findSingleRow = (array, el, value) => {
  const half = Math.ceil(finalRowValue.length / 2);
  return el[value] === "B" ? array.splice(0, half) : array.splice(-half);
};

const findSingleColumn = (array, el, value) => {
  const half = Math.ceil(finalColumnValue.length / 2);
  return el[value] === "R" ? array.splice(0, half) : array.splice(-half);
};

for (let i = 0; i < textArray.length; i++) {
  for (let j = 0; j < 7; j++) {
    findSingleRow(finalRowValue, textArray[i], j);
  }

  for (let k = 7; k < 10; k++) {
    findSingleColumn(finalColumnValue, textArray[i], k);
  }

  let id = finalRowValue * 8 + parseInt(finalColumnValue, 10);
  highestId = id > highestId ? id : highestId;
  listOfSeats.push(id);

  //reset values
  finalRowValue = listOfRows.slice();
  finalColumnValue = listOfColumns.slice();
}

listOfSeats.sort(function (a, b) {
  return a - b;
});

for (let i = 0; i < listOfSeats.length - 1; i++) {
  if (listOfSeats[i + 1] - listOfSeats[i] !== 1) {
    console.log("missing seat is " + (parseInt(listOfSeats[i + 1]) - 1));
  }
}
