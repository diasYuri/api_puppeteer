const fs = require("fs");
const axios = require("axios");

export function handleDownload(url, alt) {
  axios({
    method: "get",
    url,
    responseType: "stream",
  }).then(function (response) {
    response.data.pipe(fs.createWriteStream(`${alt}.jpg`));
  });
}
