const { gql } = require('apollo-server-express')
// between frontend and server

module.exports = gql`
  type Query {
    welcome: String!
    authorById(id:ID!):Author!
    allAuthors: [Author!]!
    getAuthorBooks (id: ID!): [Book!]!

    bookById(id:ID!): Book!
    bestsellerBooks: [Book!]!
    recentBooks(n:Int!): [Book!]!

    publisherById(id:ID!): Publisher!
    getPublisherBooks (id: ID!): [Book!]!

    # publisherInState(state:String!):[Publisher!]!
    
 
  }
  type Mutation{
    # finished author mutations
    addAuthor(input: addAuthorInput): Author!
    updateAuthor(id: ID!, input: editAuthorInput):Author!

    addBook(input: addBookInput): Book!
    updateBook(id: ID!, input: editBookInput):Book!

    addPublisher(input: addPublisherInput): Publisher!
    updatePublisher(id: ID!, input: editPublisherInput): Publisher!

    addAddress(input: addAddressInput): Address!
    updateAddress(id: ID!, input: editAddressInput): Address!
  }
  type Book{
    id: ID!
    title: String!
    language: String! 
    numPages: Int!
    datePublished: Date 
    bestseller: Boolean
    authorId: ID!
    publisherId:ID!

  }
  input addBookInput{
    
    title: String
    language: String
    numPages: Int
    datePublished: Date
    bestseller: Boolean
    authorId: ID!
    publisherId:ID!
  }
  input editBookInput{
    id: ID!
    title: String!
    language: String
    numPages: Int
    datePublished: Date
    bestseller: Boolean
    authorId: ID
    publisherId:ID
  }

  #  author info
  type Author{
    id: ID! 
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    numBooksPublished: Int!
    addressId: ID!


  }
  input addAuthorInput{
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    numBooksPublished: Int
    addressId: ID

  }  
  input editAuthorInput{
    firstName: String
    lastName: String
    age: Int
    email: String
    numBooksPublished: Int
    addressId: ID
  }

  #publisher

  type Publisher{
    id: ID!
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
    addressId: ID!

  }
  input addPublisherInput{
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
    addressId: ID
  }
  input editPublisherInput{
    company: String
    phoneNumber: String
    numBooksPublished: Int
    addressId: ID
  }

  # address info
  type Address{
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: Int!

  }
  input addAddressInput{
    street: String!
    city: String!
    state: String!
    zip: Int!

  }
  input editAddressInput{
    street: String
    city: String
    state: String
    zip: Int
  }
  scalar Date

`
