const Author = require('../../models/Author')
const Book = require('../../models/Book')


// query to display al l Authors
const allAuthors = async () => {
  try {
    const authors = await Author.query()
    return authors
  } catch (err) {
    console.log(err)
    throw new Error('Failed to get authors')
  }
}

// query to select a specific authorById
const authorById = async (_obj, {id}, context) => {
  try {
    const author = await Author.query().findOne('id', id)
    return author
  } catch (err) {
    console.log(err)
    throw new Error('Failed to get author by id')
  }
}

// query to get all books
const getAuthorBooks = async (_obj, {id}, context) => {
  try {
    // const author = await Author.query().findOne('id', id)
    const bookList = await Book.query().where('authorId', id)
    return bookList
  } catch (err) {
    console.log(err)
    throw new Error('Failed to get author books')
  }
}

const resolver = {
  Query: {
    allAuthors,
    authorById,
    getAuthorBooks,
  },

}
module.exports = resolver

