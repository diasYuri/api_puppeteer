const fs = require("fs");
const axios = require("axios");


const handleDownload = (url) => {
  axios({
    method: "get",
    url,
    responseType: "stream",
  }).then(function (response) {
    response.data.pipe(fs.createWriteStream("test.jpg"));
  });
};

handleDownload(
  "https://images-na.ssl-images-amazon.com/images/I/91miCUPPK7L._AC_UL1000_.jpg"
);
