const { gql } = require('apollo-server-express')
// between frontend and server

module.exports = gql`
  type Query {
    welcome: String!
    authorById(id:ID!):Author!
    bookById: Book!
    publisherById: Publisher!
    allAuthors: [Author!]!
  }
  type Mutation{
    addAuthor(input: addAuthorInput): Author!
    updateAuthor(id: ID!, input: editAuthorInput):Author!

    addBook(input: addBookInput): Book!
    updateBook(id: ID!, input: editBookInput):Book!

    addPublisher(input: addPublisherInput): Publisher!
    updatePublisher(input: editPublisherInput): Publisher!
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
    
    title: String!
    language: String! 
    numPages: Int!
    datePublished: Date! 
    bestseller: Boolean!
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
    age: Int
    email: String
    numBooksPublished: Int
    addressId: ID

  }  
  input editAuthorInput{
    firstName: String!
    lastName: String!
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

  scalar Date

`
