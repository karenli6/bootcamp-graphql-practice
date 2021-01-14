const Author = require('../../models/Author')

// query to display all Authors
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

const resolver = {
  Query: {
    allAuthors,
    authorById,
  },

}
module.exports = resolver

