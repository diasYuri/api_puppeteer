import puppeteer from 'puppeteer'
import dotenv from 'dotenv'

dotenv.config()

export default class InstaApi {
  async scrapping (user) {
    try {
      const browser = await puppeteer.launch({
        headless: true,
        // executablePath: "/usr/bin/chromium-browser",
        args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage']
      })

      const page = await browser.newPage()
      await page.goto('https://www.instagram.com/', {
        timeout: 0,
        waitUntil: 'networkidle0'
      })

      await page.type('[name="username"]', process.env.INSTA_USER)
      await page.type('[name="password"]', process.env.INSTA_PASS)
      await page.click('[type="submit"]')

      await page.waitForNavigation()

      await page.click('.cmbtv')

      await page.waitForNavigation()

      await page.goto(`https://www.instagram.com/${user}`)

      const imgs = await page.evaluate(() => {
        const ElemtList = document.querySelectorAll('article img')

        const imgList = [...ElemtList]

        const imgs = imgList.map(({ src }) => ({
          src
        }))

        return imgs
      })

      await browser.close()
      return imgs
    } catch (error) {
      throw new Error(error)
    }
  }
}
