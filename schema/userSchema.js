import { buildSchema } from "graphql";

const schema = buildSchema(`
    type User {
      id: ID!
      name: String!
      email: String!
      age: Int!
    }
  
    input UserInput {
      name: String!
      email: String!
      age: Int!
    }
  
    type Query {
      getUsers: [User!]!
      getUser(id: ID!): User
    }
  
    type Mutation {
      createUser(input: UserInput): User
      updateUser(id: ID!, input: UserInput): User
      deleteUser(id: ID!): String
    }
  `);
  
  export default schema;