import { readTemperature } from '@/utils/sensors/dsb18b20'
import { temperatureRepository } from '@/repositories'
import logger from '@/utils/logger'

export default async () => {
  const temperature = readTemperature()
  logger.info('temperature', temperature)
  await temperatureRepository.insert({ temperature })
}
