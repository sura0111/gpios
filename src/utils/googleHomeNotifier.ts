import notifier from 'google-home-notifier'
import googleHomeConfig from '@/env/googleHomeConfig'

notifier.device('Google Home')
notifier.ip(googleHomeConfig.ip)

export const notify = async (message: string) => {
  return new Promise(resolve => notifier.notify(message, resolve))
}

export const play = async (url: string) => {
  return new Promise(resolve => notifier.play(url, resolve))
}

notifier.notify('Google Home is connected')
