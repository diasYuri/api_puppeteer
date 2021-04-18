/* eslint-disable no-undef */
import puppeteer from 'puppeteer'

export default async function amazonApi () {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      // executablePath: "/usr/bin/chromium-browser",
      args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage']
    })

    const page = await browser.newPage()
    await page.goto('https://www.amazon.com.br/gp/bestsellers/books/', {
      timeout: 0,
      waitUntil: 'networkidle0'
    })

    const books = await page.evaluate(() => {
      const ElemtList = document.querySelectorAll('ol li img')

      const bookList = [...ElemtList]

      const booksResponse = bookList.map(({ src, alt }) => ({
        src,
        alt
      }))

      return booksResponse
    })

    await browser.close()
    return books
  } catch (error) {
    throw new Error(error)
  }
}
