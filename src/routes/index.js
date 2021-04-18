import express from 'express'
import InstaController from '../controllers/instaController.js'

import bookRoute from './book-route.js'

const routes = express.Router()

routes.use('/book', bookRoute)

routes.get('/', async (req, res) => {
  const insta = new InstaController()
  const result = await insta.search()

  res.json(result)
})

export default routes
