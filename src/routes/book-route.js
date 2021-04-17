/* eslint-disable linebreak-style */
import express from 'express'
import bookController from '../controllers/bookControlller.js'

const bookRoute = express.Router()

bookRoute.get('/', async (_req, res) => {
  try {
    const book = await bookController()

    return res.json(book)
  } catch (error) {
    return res.json({ error })
  }
})

export default bookRoute
