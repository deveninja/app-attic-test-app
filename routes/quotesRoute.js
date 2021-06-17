const quotesRoute = require('express').Router()
const {
  postQuote,
  getQuote,
  getImage
} = require('../controllers/quotesController')

quotesRoute
  .route('/')
  .get(getQuote)
  .post(postQuote)



module.exports = quotesRoute