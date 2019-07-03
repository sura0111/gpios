import { Gpio, BinaryValue } from 'onoff'
import { GpioPin } from '@/env/gpios'

const gpioLed = {
  green: new Gpio(GpioPin.twoColorLedGreen, 'out'),
  red: new Gpio(GpioPin.twoColorLedRed, 'out'),
}

let timer: NodeJS.Timeout | null

const led = async ({ green, red }: { green?: BinaryValue; red?: BinaryValue }, timeout?: number) => {
  if (green !== undefined) {
    await gpioLed.green.write(green)
  }
  if (red !== undefined) {
    await gpioLed.red.write(red)
  }
  if (timeout) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      gpioLed.green.write(0)
      gpioLed.red.write(0)
    }, timeout)
  }
}

process.on('SIGINT', () => {
  gpioLed.green.unexport()
  gpioLed.red.unexport()
})

export default led
