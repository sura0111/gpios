import { GraphQLObjectType, GraphQLString } from 'graphql'

export const getDefaultType = (name: string) => {
  return new GraphQLObjectType({
    name,
    fields: {
      message: { type: GraphQLString },
    },
  })
}
