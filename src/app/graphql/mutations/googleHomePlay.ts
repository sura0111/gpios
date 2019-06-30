import { TypeGoogleHomeSpeak } from '@/app/graphql/types/googleHomeTypes'
import { GraphQLString, GraphQLNonNull } from 'graphql'
import { play } from '@/utils/nodeGoogleHome'
import Mutation from './Mutation'

const googleHomePlay = new Mutation({
  type: TypeGoogleHomeSpeak,
  args: {
    url: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
})

googleHomePlay.setResolverWithSuccessMessage(async (_rootValue: unknown, input: { url: string }) => {
  return await play(input.url)
})

export default googleHomePlay
