import { GraphQLObjectType, GraphQLFloat, GraphQLList, GraphQLID } from 'graphql'
import { GraphQLDateTime } from 'graphql-iso-date'

export const TypeTemperature = new GraphQLObjectType({
  name: 'Temperatures',
  fields: {
    id: { type: GraphQLID },
    temperature: { type: GraphQLFloat },
    datetime: { type: GraphQLDateTime },
  },
})

export const TypeTemperatures = new GraphQLList(TypeTemperature)
