import { RandomValue } from "./helpers/randomValue.js";
//import amazonApi from "./service/amazon-api.js";
import mockApi from "./service/mock.js";

const URL_img = "https://images-na.ssl-images-amazon.com/images/I/";
const URL_end = "._AC_UL1000.jpg";

const handleSrc = (src) => {
  const id_src = src.replace(URL_img, "").split(".")[0];
  return URL_img + id_src + URL_end;
};

const handleBook = async () => {
  const bookList = mockApi(); //await amazonApi();

  const rValue = RandomValue(bookList.length);
  let bookSelect = bookList[rValue];

  bookSelect = {
    src: handleSrc(bookSelect.src),
    alt: bookSelect.alt,
  };

  console.log(bookSelect);
};

function init() {
  handleBook();
}

init();
