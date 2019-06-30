import { Connecter } from 'node-googlehome'
import googleHomeConfig from '@/env/googleHomeConfig'

const device = new Connecter(googleHomeConfig.ip)

export const speak = async (text: string) => {
  await device.readySpeaker()
  await device.speak(text)
}

export const play = async (url: string) => {
  await device.readySpeaker()
  await device.playMedia(url)
}

speak('the app is connected with Google home')
