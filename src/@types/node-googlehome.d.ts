declare class Connecter {
  public constructor(ip: string)
  public config(option: { lang: string }): void
  public readySpeaker(): Promise<void>
  public playMedia(url: string): Promise<void>
  public speak(text: string): Promise<void>
}

interface ConnecterConstructor {
  new (ip: string): Connecter
}

type Search = (waitTime: number) => Promise<void>

declare let nodeGooglehome: {
  Connecter: ConnecterConstructor
  search: Search
}

export = nodeGooglehome
