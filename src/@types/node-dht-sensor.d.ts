interface Promises {
  initialize: (...args: any) => void
  setMaxRetries: (maxRetries: number) => void
  readSync: (type: number, pin: number) => { temperature: number; humidity: number }
  read: (type?: number, pin?: number) => Promise<{ temperature: number; humidity: number }>
}
declare var promises: Promises

export { promises }
