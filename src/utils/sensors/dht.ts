import { promises as sensor } from 'node-dht-sensor'
import logger from '@/utils/logger'
import { GpioPin } from '@/env/gpios'

export default class Dht {
  private static readonly DEFAULT_SENSOR_NO = 22
  private static readonly DEFAULT_GPIO_NO = GpioPin.dht11
  private static readonly DEFAULT_MAX_RETRIES = 10
  private static readonly sensor = sensor
  private static gpioNo: number
  private static sensorNo: 11 | 22

  public static initialize(
    gpioNo: number = this.DEFAULT_GPIO_NO,
    maxRetries: number = this.DEFAULT_MAX_RETRIES,
    sensorNo: 11 | 22 = this.DEFAULT_SENSOR_NO,
  ) {
    this.gpioNo = gpioNo
    this.sensorNo = sensorNo
    this.sensor.initialize(this.sensorNo, this.gpioNo)
    this.sensor.setMaxRetries(maxRetries)
  }

  public static async read() {
    const data = await this.sensor.read(this.sensorNo, this.gpioNo)
    logger.info(data)
    return data
  }
}
