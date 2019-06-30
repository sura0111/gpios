import { temperatureRepository } from '@/repositories'
import { TypeTemperature } from '../types/temperatureTypes'
import Query from './Query'

export default new Query({
  type: TypeTemperature,
  resolve: temperatureRepository.getLatest,
})
