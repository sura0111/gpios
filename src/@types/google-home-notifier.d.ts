interface Device {
  (name: string, lang?: string): void
}

interface Accent {
  (accent: string): void
}

interface Ip {
  (ip: string): void
}

interface Notify {
  (message: string, callback?: (response: string) => void): void
}

interface Play {
  (mp3Url: string, callback?: (response: string) => void): void
}

declare const googlehomeNotifer: {
  device: Device
  accent: Accent
  ip: Ip
  notify: Notify
  play: Play
}

export = googlehomeNotifer
