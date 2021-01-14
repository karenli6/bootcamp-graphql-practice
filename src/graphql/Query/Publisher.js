const Publisher = require('../../models/Publisher')

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

// // query to list publishers in the same state
// const publisherInState = async (_obj, {state}, context) => {
//   try {
//     const firstN = await Book.query().orderBy('datePublished','desc').limit(n)
//     return firstN
//   } catch (err) {
//     console.log(err)
//     throw new Error('Failed to get most recent books')
//   }
// }

  
const resolver = {
  Query: {
    publisherById,
  },

}
module.exports = resolver

