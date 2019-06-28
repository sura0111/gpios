import { read } from '@/sensors/dsb18b20'
import { temperatureRepository } from '@/repositories'
import logger from './logger'

export const measureTemperatureThenSave = async () => {
  const temperature = read()
  logger.info('temperature', temperature)
  await temperatureRepository.insert({ temperature })
}
