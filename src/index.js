import { RandomValue } from "./helpers/randomValue.js";
import amazonApi from "./service/amazon-api.js";

const URL_img = "https://images-na.ssl-images-amazon.com/images/I/";

const HandleApi = async () => {
  const books = await amazonApi();

  const randomValue = RandomValue(books.length);
  console.log(books[randomValue]);
};

HandleApi();
