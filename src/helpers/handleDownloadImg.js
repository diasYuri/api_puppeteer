import fs from 'fs'
import axios from 'axios'

export function handleDownload (url, alt) {
  axios({
    method: 'get',
    url,
    responseType: 'stream'
  }).then((response) => {
    response.data.pipe(fs.createWriteStream(`./img/${alt}.jpg`))
  })
}
