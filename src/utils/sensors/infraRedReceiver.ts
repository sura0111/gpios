import { Gpio } from 'onoff'
import led from './twoColorLed'
import { GpioPin } from '@/env/gpios'
import logger from '../logger'

const infraRedReceiverGpio = new Gpio(GpioPin.infraRedReceiver, 'in', 'falling')

infraRedReceiverGpio.watch((error, value) => {
  if (error) throw error
  led({ green: 1 }, 100)
  console.log(value)
})

logger.info('infra red sensor is started working')
process.on('SIGINT', () => infraRedReceiverGpio.unexport())
