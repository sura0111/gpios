import { TypeGoogleHomeSpeak } from '@/app/graphql/types/googleHomeTypes'
import { speak } from '@/utils/nodeGoogleHome'
import Mutation from './Mutation'
import { GraphQLDateTime } from 'graphql-iso-date'
import { temperatureRepository } from '@/repositories'
import dayjs from 'dayjs'

export default new Mutation({
  type: TypeGoogleHomeSpeak,
  args: {
    datetime: {
      type: GraphQLDateTime,
    },
  },
  resolve: async (_rootValue, { datetime }: { datetime?: Date }) => {
    const data = await temperatureRepository.getClosest(datetime)
    if (data === undefined) {
      return
    }
    const date = dayjs(data.datetime).format('YYYY-MM-DD HH:mm:ss')
    const message = `time ${date}, the room temperature is ${data.temperature}`
    await speak(message)
    return { message }
  },
})
