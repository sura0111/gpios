/* eslint-disable @typescript-eslint/no-explicit-any */
import { GraphQLFieldResolver } from 'graphql'
import Field from '@/app/graphql/Field'

export default class Mutation extends Field {
  public setResolverWithSuccessMessage(resolve: GraphQLFieldResolver<any, any, any>, message: string = 'SUCCESS') {
    const resolver: GraphQLFieldResolver<any, any, any> = async (...args) => {
      await resolve(...args)
      return { message }
    }
    this.resolve = resolver
  }
}
