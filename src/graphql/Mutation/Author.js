const Author = require('../../models/Author')

// mutation method for adding a new author
const addAuthor = async (_obj, args, context) => {

  try {
    const author = await Author.query().insert({
      firstName: args.input.firstName,
      lastName: args.input.lastName,
      age: args.input.age,
      email: args.input.email,
      numBooksPublished: args.input.numBooksPublished,
      addressId: args.input.addressId,

    })
    return author
  } catch (err) {
    console.log(err)
    throw new Error('Failed to INSERT new author')
  }
}

// mutation method to update an author object
const updateAuthor = async (_obj, args, context) => {

  try {

    const findAuthor = await Author.query().findOne('id', args.id)

    const changedAuthor = findAuthor.$query().patch({
      firstName: args.input.firstName,
      lastName: args.input.lastName,
      age: args.input.age,
      email: args.input.email,
    })

    return changedAuthor
  } catch (err) {
    console.log(err)
    throw new Error('Failed to CHANGE author')
  }
}


const resolver = {
  Mutation: {
    addAuthor,
    updateAuthor,
  },

}
module.exports = resolver

