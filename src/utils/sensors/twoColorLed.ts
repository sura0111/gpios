import { Gpio } from 'onoff'

const gpioLed = {
  green: new Gpio(20, 'out'),
  red: new Gpio(21, 'out'),
}

let timer: NodeJS.Timeout | null

const led = async ({ green, red }: { green?: boolean; red?: boolean }, timeout?: number) => {
  if (green !== undefined) {
    await gpioLed.green.write(green ? 1 : 0)
  }
  if (red !== undefined) {
    await gpioLed.red.write(red ? 1 : 0)
  }
  if (timeout) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      gpioLed.green.write(0)
      gpioLed.red.write(0)
    }, timeout)
  }
}

process.on('SIGINT', () => led({ green: false, red: false }))

export default led
