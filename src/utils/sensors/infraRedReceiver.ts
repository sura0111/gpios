import { Gpio } from 'onoff'
import logger from '../logger'
import led from './twoColorLed'

const infraRedReceiverGpio = new Gpio(12, 'in')

infraRedReceiverGpio.watch((error, value) => {
  if (error) {
    logger.error(error)
  }
  led({ green: true }, 500)
  console.log(value)
})
