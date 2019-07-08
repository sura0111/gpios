import { temperatureRepository } from '@/repositories'
import Dht from '@/utils/sensors/dht'

Dht.initialize()

export default async () => {
  const { temperature, humidity } = await Dht.read()
  await temperatureRepository.insert({ temperature, humidity })
}
