import { Gpio } from 'onoff'
import led from './twoColorLed'
import { GpioPin } from '@/env/gpios'
import logger from '../logger'

const button = new Gpio(GpioPin.button, 'in', 'both')

button.watch((error, value) => {
  if (error) throw error
  led({ green: value, red: value === 0 ? 1 : 0 })
})

logger.info('gpio button is started working')
process.on('SIGINT', () => button.unexport())
