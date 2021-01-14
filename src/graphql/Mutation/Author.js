const Author = require('../../models/Author')


const addAuthor = async (_obj, args, context) => {

  try {
    console.log(args)
    console.log("EXITING")
    const author = await Author.query().insert({
      args,

    })
    return author
  } catch (err) {
    console.log(err)
    throw new Error('Failed to INSERT author')
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
  Mutation: {
    addAuthor,
  },

}
module.exports = resolver

