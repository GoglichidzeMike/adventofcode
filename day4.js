const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

global.fetch = require("node-fetch");

let textArray;
let newArray = [];
let newnew = [];
let url = "https://adventofcode.com/2020/day/4/input";

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
      referrer: "https://adventofcode.com/2020/day/4",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
    }).then((response) => response.text(response));

    let textArray = response.split("\n\n");
    for (let i = 0; i < textArray.length; i++) {
      newArray.push(textArray[i].split(/\s+/));
      newnew.push(textArray[i].split(/\s+/));
      newnew[i].sort();
      newArray[i].sort();
    }

    for (let k = 0; k < newArray.length; k++) {
      for (let j = 0; j < newArray[k].length; j++) {
        if (newnew[k][j].substring(0, 3) === "cid") {
          newnew[k].splice(j, 1);
          newArray[k].splice(j, 1);
        }
      }
    }

    for (let k = 0; k < newArray.length; k++) {
      for (let j = 0; j < newArray[k].length; j++) {
        newArray[k][j] = newArray[k][j].substring(0, 3);
        newnew[k][j] = newnew[k][j].substring(4);
      }
    }

    const valuesToCheck = ["byr", "ecl", "eyr", "hcl", "hgt", "iyr", "pid"];
    let validPassports = 0;
    let validForPartTwo = 1;
    for (let i = 0; i < newArray.length; i++) {
      if (valuesToCheck.every((val) => newArray[i].includes(val))) {
        validPassports++;
        if (
          newnew[i][0].length === 4 &&
          newnew[i][0] >= 1920 &&
          newnew[i][0] <= 2002
        ) {
          if (
            ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].indexOf(
              newnew[i][1]
            ) >= 0
          ) {
            if (
              newnew[i][2].length === 4 &&
              newnew[i][2] >= 2020 &&
              newnew[i][2] <= 2030
            ) {
              if (
                newnew[i][3].match(/[0-9A-Fa-f]{6}/g) &&
                newnew[i][3][0] === "#"
              ) {
                let ending = newnew[i][4].substr(newnew[i][4].length - 2);
                let start = parseInt(newnew[i][4]);
                if (
                  (ending === "in" && start >= 59 && start <= 76) ||
                  (ending === "cm" && start >= 150 && start <= 193)
                ) {
                  if (
                    newnew[i][5].length === 4 &&
                    newnew[i][5] >= 2010 &&
                    newnew[i][5] <= 2020
                  ) {
                    if (newnew[i][6].length === 9) {
                      console.log(newnew[i]);
                      validForPartTwo++;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    console.log({ validPassports });
    console.log({ validForPartTwo });
  } catch (err) {
    console.error(err);
  }
};

getData();

/// DAY ONE COMPLETE

// DAY 2 Starts here
