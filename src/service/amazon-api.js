import puppeteer from "puppeteer";

export default async function amazonApi() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.amazon.com.br/gp/bestsellers/books/");

  const books = await page.evaluate(() => {
    ElemtList = document.querySelectorAll("ol li img");

    const bookList = [...ElemtList];

    const books = bookList.map(({ src, alt }) => {
      return {
        src,
        alt,
      };
    });

    return books;
  });

  await browser.close();
  return books;
}
