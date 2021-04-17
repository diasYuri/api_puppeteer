import express from 'express'

import bookRoute from './book-route.js'

const routes = express.Router()

routes.use('/', bookRoute)

export default routes
