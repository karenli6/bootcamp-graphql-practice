const Book = require('../../models/Book')

// query to display all bestselling books
const bestsellerBooks = async () => {
  try {
    const bestsellers = await Book.query().where('bestseller', true)
    return bestsellers
  } catch (err) {
    console.log(err)
    throw new Error('Failed to get bestselling books')
  }
}

// query to select a specific bookById
const bookById = async (_obj, {id}, context) => {
  try {
    const b = await Book.query().findOne('id', id)
    return b
  } catch (err) {
    console.log(err)
    throw new Error('Failed to get book by id')
  }
}

// query to select most recent n books
const recentBooks = async (_obj, {n}, context) => {
  try {
    const firstN = await Book.query().orderBy('datePublished','desc').limit(n)
    return firstN
  } catch (err) {
    console.log(err)
    throw new Error('Failed to get most recent books')
  }
}

  
const resolver = {
  Query: {
    bestsellerBooks,
    bookById,
    recentBooks,

  },

}
module.exports = resolver

