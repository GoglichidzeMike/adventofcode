global.fetch = require("node-fetch");

let textArray, numberArray;

const getData = async () => {
  try {
    const response = await fetch("https://adventofcode.com/2020/day/1/input", {
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
      referrer: "https://adventofcode.com/2020/day/1",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
    }).then((response) => response.text(response));

    let textArray = response.split("\n");
    for (let i = 0; i < textArray.length; i++) {
      textArray[i] = parseInt(textArray[i], 10);
    }

    /// solve problem now

    for (let i = 0; i < textArray.length; i++) {
      for (let j = 0; j < textArray.length; j++) {
        for (let s = 0; s < textArray.length; s++) {
          if (textArray[i] + textArray[j] + textArray[s] === 2020) {
            console.log(textArray[i] * textArray[j] * textArray[s]);
          }
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
};

getData();
