const Address = require('../../models/Address')

// mutation method for adding a new address
const addAddress = async (_obj, args, context) => {

  try {
    const newAddress = await Address.query().insert({
      street: args.input.street,
      city: args.input.city,
      state: args.input.state,
      zip: args.input.zip,

    })
    return newAddress
  } catch (err) {
    console.log(err)
    throw new Error('Failed to INSERT a new address')
  }
}

// mutation method for updating an address object
const updateAddress = async (_obj, args, context) => {

  try {
      console.log("EDITING")
      console.log(args.id)
      console.log(args.input)
    // create a new instance
    const findAddress = await Address.query().findOne('id', args.id)

    const changedAddress = findAddress.$query().patch({
      street: args.input.street,
      city: args.input.city,
      state: args.input.state,
      zip: args.input.zip,
    })

    return changedAddress
  } catch (err) {
    console.log(err)
    throw new Error('Failed to CHANGE publisher')
  }
}

const resolver = {
  Mutation: {
    addAddress,
    updateAddress,
  },

}
module.exports = resolver

