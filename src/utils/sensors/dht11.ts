import { promises as sensor } from 'node-dht-sensor'
import logger from '@/utils/logger'
import { GpioPin } from '@/env/gpios'

export default class TemperatureSensor {
  private static readonly DEFAULT_SENSOR_NO = 11
  private static readonly DEFAULT_GPIO_NO = GpioPin.dht11
  private static readonly DEFAULT_MAX_RETRIES = 10
  private static readonly sensor = sensor
  private gpio: number

  public constructor(
    GPIO: number = TemperatureSensor.DEFAULT_GPIO_NO,
    maxRetries: number = TemperatureSensor.DEFAULT_MAX_RETRIES,
  ) {
    this.gpio = GPIO
    TemperatureSensor.sensor.initialize(TemperatureSensor.DEFAULT_SENSOR_NO, this.gpio)
    TemperatureSensor.sensor.setMaxRetries(maxRetries)
  }

  public async read() {
    const data = await TemperatureSensor.sensor.read(TemperatureSensor.DEFAULT_SENSOR_NO, this.gpio)
    logger.info(data)
    return data
  }
}
