const Publisher = require('../../models/Publisher')

// mutation method for adding a new publisher
const addPublisher = async (_obj, args, context) => {

  try {
    const newPublisher = await Publisher.query().insert({

      company: args.input.company,
      phoneNumber: args.input.phoneNumber,
      numBooksPublished: args.input.numBooksPublished,
      addressId: args.input.addressId,
    })
    return newPublisher
  } catch (err) {
    console.log(err)
    throw new Error('Failed to INSERT a new publisher')
  }
}

// mutation method for updating a publisher object
const updatePublisher = async (_obj, args, context) => {

  try {
    // create a new instance
    const findPublisher = await Publisher.query().findOne('id', args.id)

    const changedPublisher = findPublisher.$query().patch({
      company: args.input.company,
      phoneNumber: args.input.phoneNumber,
      numBooksPublished: args.input.numBooksPublished,
      addressId: args.input.addressId,
    })

    return changedPublisher
  } catch (err) {
    console.log(err)
    throw new Error('Failed to CHANGE publisher')
  }
}

const resolver = {
  Mutation: {
    addPublisher,
    updatePublisher,
  },

}
module.exports = resolver

