/* eslint-disable linebreak-style */
import express from 'express'
import { BookController } from '../controllers/bookControlller.js'

const bookRoute = express.Router()

bookRoute.get('/', async (_req, res) => {
  try {
    const controller = new BookController()

    const book = await controller.indicateBook()

    return res.json(book)
  } catch (error) {
    console.log(error)
    return res.json({ error: error })
  }
})

export default bookRoute
