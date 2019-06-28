interface ReadSimpleC {
  (callback?: (err: Error | undefined | null, num: number) => void): number
}
declare var readSimpleC: ReadSimpleC

export { readSimpleC }
