const Book = require('../../models/Book')

// mutation method for adding a new book
const addBook = async (_obj, args, context) => {

  try {
    const newBook = await Book.query().insert({
      title: args.input.title,
      language: args.input.language,
      numPages: args.input.numPages,
      datePublished: args.input.datePublished,
      bestseller: args.input.bestseller,
      authorId: args.input.authorId,
      publisherId: args.input.publisherId,
    })
    return newBook
  } catch (err) {
    console.log(err)
    throw new Error('Failed to INSERT a new book')
  }
}

// mutation method for updating a book object
const updateBook = async (_obj, args, context) => {

  try {
    // create a new instance
    const findBook = await Book.query().findOne('id', args.id)

    const changedBook = findBook.$query().patch({
      title: args.input.title,
      language: args.input.language,
      numPages: args.input.numPages,
      datePublished: args.input.datePublished,
      bestseller: args.input.bestseller,
      authorId: args.input.authorId,
      publisherId: args.input.publisherId,
    })

    return changedBook
  } catch (err) {
    console.log(err)
    throw new Error('Failed to CHANGE book')
  }
}

const resolver = {
  Mutation: {
    addBook,
    updateBook,
  },

}
module.exports = resolver

