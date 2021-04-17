/* eslint-disable camelcase */
import amazonApi from '../service/amazon-api.js'
import { RandomValue } from '../helpers/randomValue.js'

const URL_img = 'https://images-na.ssl-images-amazon.com/images/I/'
const URL_end = '._AC_UL1000.jpg'

let cacheBooks = []

const mapperURL = (src) => {
  const id_src = src.replace(URL_img, '').split('.')[0]
  return URL_img + id_src + URL_end
}

export default async function bookController () {
  if (cacheBooks.length === 0) {
    const apiResponse = await amazonApi()
    cacheBooks = apiResponse.map(({ src, alt }) => ({
      src: mapperURL(src),
      alt
    }))
  }
  const raffleBook = RandomValue(cacheBooks.length)
  return cacheBooks[raffleBook]
}
