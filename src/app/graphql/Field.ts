/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  GraphQLFieldConfig,
  GraphQLObjectType,
  GraphQLFieldConfigArgumentMap,
  GraphQLFieldResolver,
  GraphQLList,
  GraphQLType,
} from 'graphql'

type Resolver = GraphQLFieldResolver<any, any, any>

export default class Field implements GraphQLFieldConfig<any, any, any> {
  public type: GraphQLObjectType | GraphQLList<GraphQLType>
  public args?: GraphQLFieldConfigArgumentMap
  public resolve?: Resolver

  public constructor({
    type,
    resolve,
    args,
  }: {
    type: GraphQLObjectType | GraphQLList<GraphQLType>
    resolve?: Resolver
    args?: GraphQLFieldConfigArgumentMap
  }) {
    this.type = type
    this.resolve = resolve
    this.args = args
  }

  public setInputArguments(args: GraphQLFieldConfigArgumentMap) {
    this.args = args
  }
}
