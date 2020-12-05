global.fetch = require("node-fetch");

let textArray;
let url = "https://adventofcode.com/2020/day/3/input";

const getData = async () => {
  try {
    const response = await fetch(url, {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "en-US,en;q=0.9,ka;q=0.8,ru;q=0.7",
        "cache-control": "max-age=0",
        "sec-ch-ua":
          '"\\\\Not;A\\"Brand";v="99", "Google Chrome";v="85", "Chromium";v="85"',
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        cookie:
          "_ga=GA1.2.1609080962.1606859672; _gid=GA1.2.470105010.1606859672; session=53616c7465645f5feb52af167d0bb98d857cbd11700dc15f0d43d3c69e78e66a99ed27e96e26ac49b836db5efc68acb4",
      },
      referrer: "https://adventofcode.com/2020/day/2",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
    }).then((response) => response.text(response));

    let textArray = response.split("\n");
    textArray.pop();
    let newArray = [];

    for (let i = 0; i < textArray.length; i++) {
      newArray.push(textArray[i].split(""));
    }
    // console.log({ textArray });
    // console.log({ newArray });
    console.table(newArray);
    console.log("number of lines " + newArray.length);
    console.log("length of each line " + newArray[0].length);
    //number of moves until reached the limit

    //try to loop and change everything looped to 'O'
    let x = 0;
    let y = 0;

    let rightThreeDownOne = 0;
    while (x < textArray.length - 1) {
      y < 30 ? y++ : (y = 0);
      console.log({ x, y });
      y < 30 ? y++ : (y = 0);
      console.log({ x, y });
      y < 30 ? y++ : (y = 0);
      console.log({ x, y });
      if (x < textArray.length - 1) {
        x++;
        console.log({ x, y });
        if (newArray[x][y] === "#") {
          rightThreeDownOne++;
        }
      }
    }
    console.log(
      "there are " + rightThreeDownOne + " trees at Right 3, down 1."
    );
  } catch (err) {
    console.error(err);
  }
};

// getData();

/// DAY ONE COMPLETE

// DAY 2 Starts here

const getDataPartTwo = async () => {
  try {
    const response = await fetch(url, {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "en-US,en;q=0.9,ka;q=0.8,ru;q=0.7",
        "cache-control": "max-age=0",
        "sec-ch-ua":
          '"\\\\Not;A\\"Brand";v="99", "Google Chrome";v="85", "Chromium";v="85"',
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        cookie:
          "_ga=GA1.2.1609080962.1606859672; _gid=GA1.2.470105010.1606859672; session=53616c7465645f5feb52af167d0bb98d857cbd11700dc15f0d43d3c69e78e66a99ed27e96e26ac49b836db5efc68acb4",
      },
      referrer: "https://adventofcode.com/2020/day/2",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
    }).then((response) => response.text(response));

    let textArray = response.split("\n");
    textArray.pop();
    let newArray = [];

    for (let i = 0; i < textArray.length; i++) {
      newArray.push(textArray[i].split(""));
    }
    // console.log({ textArray });
    // console.log({ newArray });
    console.table(newArray);
    console.log("number of lines " + newArray.length);
    console.log("length of each line " + newArray[0].length);
    //number of moves until reached the limit

    //start Right 3 Down 1.
    let x = 0;
    let y = 0;

    let rightThreeDownOne = 0;
    while (x < textArray.length - 1) {
      y < 30 ? y++ : (y = 0);
      console.log({ x, y });
      y < 30 ? y++ : (y = 0);
      console.log({ x, y });
      y < 30 ? y++ : (y = 0);
      console.log({ x, y });
      if (x < textArray.length - 1) {
        x++;
        console.log({ x, y });
        if (newArray[x][y] === "#") {
          rightThreeDownOne++;
        }
      }
    }

    console.log(
      "there are " + rightThreeDownOne + " trees at Right 3, down 1."
    );
    //end right  down 1

    // Start Righ 1 Down 1

    x = 0;
    y = 0;

    let rightOneDownOne = 0;
    while (x < textArray.length - 1) {
      y < 30 ? y++ : (y = 0);
      console.log({ x, y });
      if (x < textArray.length - 1) {
        x++;
        console.log({ x, y });
        if (newArray[x][y] === "#") {
          rightOneDownOne++;
        }
      }
    }

    console.log("there are " + rightOneDownOne + " trees at Right 1, Down 1.");

    // End Right 1 Down 1

    // start right 5 down 1

    x = 0;
    y = 0;

    let rightFiveDownOne = 0;
    while (x < textArray.length - 1) {
      y < 30 ? y++ : (y = 0);
      console.log({ x, y });
      y < 30 ? y++ : (y = 0);
      console.log({ x, y });
      y < 30 ? y++ : (y = 0);
      console.log({ x, y });
      y < 30 ? y++ : (y = 0);
      console.log({ x, y });
      y < 30 ? y++ : (y = 0);
      console.log({ x, y });
      if (x < textArray.length - 1) {
        x++;
        console.log({ x, y });
        if (newArray[x][y] === "#") {
          rightFiveDownOne++;
        }
      }
    }

    console.log("there are " + rightFiveDownOne + " trees at Right 5, Down 1.");
    // end right 5 down 1

    // start right 5 down 1

    x = 0;
    y = 0;

    let rightSevenDownOne = 0;
    while (x < textArray.length - 1) {
      y < 30 ? y++ : (y = 0);
      console.log({ x, y });
      y < 30 ? y++ : (y = 0);
      console.log({ x, y });
      y < 30 ? y++ : (y = 0);
      console.log({ x, y });
      y < 30 ? y++ : (y = 0);
      console.log({ x, y });
      y < 30 ? y++ : (y = 0);
      console.log({ x, y });
      y < 30 ? y++ : (y = 0);
      console.log({ x, y });
      y < 30 ? y++ : (y = 0);
      console.log({ x, y });
      if (x < textArray.length - 1) {
        x++;
        console.log({ x, y });
        if (newArray[x][y] === "#") {
          rightSevenDownOne++;
        }
      }
    }

    console.log(
      "there are " + rightSevenDownOne + " trees at Right 7, Down 1."
    );
    // end right 5 down 1

    // Start Righ 1 Down 2

    x = 0;
    y = 0;

    let rightOneDownTwo = 0;
    while (x < textArray.length - 1) {
      y < 30 ? y++ : (y = 0);
      console.log({ x, y });
      if (x < textArray.length - 1) {
        x += 2;
        console.log({ x, y });
        if (newArray[x][y] === "#") {
          rightOneDownTwo++;
        }
      }
    }

    console.log("there are " + rightOneDownTwo + " trees at Right 1, Down 2.");

    // End Right 1 Down 2

    console.log(
      "Muiltiply these together to get:" +
        rightOneDownTwo *
          rightSevenDownOne *
          rightFiveDownOne *
          rightOneDownOne *
          rightThreeDownOne
    );
  } catch (err) {
    console.error(err);
  }
};

getDataPartTwo();
