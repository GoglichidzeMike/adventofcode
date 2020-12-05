global.fetch = require("node-fetch");

let textArray;

const getData = async () => {
  try {
    const response = await fetch("https://adventofcode.com/2020/day/2/input", {
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
    let newArray = [];
    for (let i = 0; i < textArray.length; i++) {
      // console.log(textArray[i].split(":"));
      newArray.push(textArray[i].split(":"));
    }

    /// solve problem now
    let validCount = 0;

    for (let i = 0; i < newArray.length - 1; i++) {
      let splitArray = newArray[i][0].split(/[ -]+/);
      let min = splitArray[0];
      let max = splitArray[1];
      let char = new RegExp(splitArray[2], "g");
      let count = (newArray[i][1].match(char) || []).length;

      if (count <= max && count >= min) {
        // console.log(newArray[i] + " valid");
        validCount++;
      }
    }
    console.log(`There are ${validCount} valid passwords`);
  } catch (err) {
    console.error(err);
  }
};

// getData();

const getDataPart2 = async () => {
  try {
    const response = await fetch("https://adventofcode.com/2020/day/2/input", {
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

    let newArray = [];
    for (let i = 0; i < textArray.length; i++) {
      newArray.push(textArray[i].split(":"));
    }
    newArray.pop();
    console.log({ newArray });
    /// solve problem now
    let validCount = 0;

    for (let i = 0; i < newArray.length; i++) {
      let splitArray = newArray[i][0].split(/[ -]+/);
      let min = splitArray[0];
      let max = splitArray[1];
      let char = splitArray[2];
      let checkOne = newArray[i][1][min];
      let checkTwo = newArray[i][1][max];
      if (
        (checkOne === char && checkTwo !== char) ||
        (checkOne !== char && checkTwo === char)
      ) {
        console.log(newArray[i] + " valid");
        validCount++;
      }
    }
    console.log(`There are ${validCount} valid passwords`);
  } catch (err) {
    console.error(err);
  }
};

getDataPart2();
