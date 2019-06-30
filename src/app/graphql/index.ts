import expressGraphql from 'express-graphql'
import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import * as queries from './queries'
import * as mutations from './mutations'

export default expressGraphql({
  schema: new GraphQLSchema({
    query: new GraphQLObjectType({ name: 'Query', fields: queries }),
    mutation: new GraphQLObjectType({ name: 'Mutation', fields: mutations }),
  }),
  graphiql: true,
})
