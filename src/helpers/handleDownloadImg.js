import fs from "fs";
import axios from "axios";

export function handleDownload(url, alt) {
  axios({
    method: "get",
    url,
    responseType: "stream",
  }).then(function (response) {
    response.data.pipe(fs.createWriteStream(`./img/${alt}.jpg`));
  });
}
