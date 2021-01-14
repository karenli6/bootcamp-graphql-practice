const Author = require('../../models/Author')
const Book = require('../../models/Book')
const Address = require('../../models/Address')


const allAuthors = async () => {
  try {
    const authors = await Author.query()
    return authors
  } catch (err) {
    console.log(err)
    throw new Error('Failed to get authors')
  }
}

const authorById = async (_obj, {id}, context) => {
  try {
    const author = await Author.query().findOne('id', id)
    return author
  } catch (err) {
    console.log(err)
    throw new Error('Failed to get author by id')
  }
}


// const books = async ({id}, params, context) => {
//     const b = await Book.query().where('authorId', id)
//     return b

// }

// const address = async ({addresId}, params, context) => {
//     const a = await Address.query().findOne('id', addressId)
//     return a

// }

const resolver = {
  Query: {
    allAuthors,
    authorById,
  },

}
module.exports = resolver

