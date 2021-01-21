const Publisher = require('../../models/Publisher')
const Book = require('../../models/Book')

// query to select a specific publisherById
const publisherById = async (_obj, {id}, context) => {
  try {
    const p = await Publisher.query().findOne('id', id)
    return p
  } catch (err) {
    console.log(err)
    throw new Error('Failed to get publisher by id')
  }
}

// query to select a specific publisherById
const getPublisherBooks = async (_obj, {id}, context) => {
  try {
    const bookList = await Book.query().where('publisherId', id)
    return bookList
  } catch (err) {
    console.log(err)
    throw new Error('Failed to get publisher by id')
  }
}

  
const resolver = {
  Query: {
    publisherById,
    getPublisherBooks,
  },

}
module.exports = resolver

