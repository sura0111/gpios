import { TypeGoogleHomeSpeak } from '@/app/graphql/types/googleHomeTypes'
import { GraphQLString, GraphQLNonNull } from 'graphql'
import { speak } from '@/utils/nodeGoogleHome'
import Mutation from './Mutation'

const googleHomeSpeak = new Mutation({
  type: TypeGoogleHomeSpeak,
  args: {
    text: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
})

googleHomeSpeak.setResolverWithSuccessMessage(async (_rootValue, input: { text: string }) => {
  await speak(input.text)
})

export default googleHomeSpeak
