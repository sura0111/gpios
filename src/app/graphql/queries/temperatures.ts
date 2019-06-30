import { temperatureRepository } from '@/repositories'
import { TypeTemperatures } from '../types/temperatureTypes'
import { GraphQLDate } from 'graphql-iso-date'
import Query from './Query'

export default new Query({
  type: TypeTemperatures,
  args: {
    since: {
      type: GraphQLDate,
    },
  },
  resolve: async (_: unknown, { since }: { since?: Date }) => {
    return await temperatureRepository.getList(since)
  },
})
