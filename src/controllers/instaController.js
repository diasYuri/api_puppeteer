import InstaApi from '../service/instagram-api.js'

// const instaCache = {}

export default class InstaController {
  async search () {
    const insta = new InstaApi()
    const resultado = await insta.scrapping('neymarjr')
    console.log(resultado)
    return resultado
  }
}
