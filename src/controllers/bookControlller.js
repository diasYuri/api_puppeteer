/* eslint-disable camelcase */
import amazonApi from '../service/amazon-api.js'
import { RandomValue } from '../helpers/randomValue.js'

let cacheBooks = []

export class BookController {
  mapperURL (url) {
    const URL_img = 'https://images-na.ssl-images-amazon.com/images/I/'
    const URL_end = '._AC_UL1000.jpg'
    const id_src = url.replace(URL_img, '').split('.')[0]
    return URL_img + id_src + URL_end
  }

  async indicateBook () {
    if (cacheBooks.length === 0) {
      const apiResponse = await amazonApi()
      cacheBooks = apiResponse.map(({ src, alt }) => ({
        src: this.mapperURL(src),
        alt
      }))
    }
    const raffleBook = RandomValue(cacheBooks.length)
    return cacheBooks[raffleBook]
  }
}
