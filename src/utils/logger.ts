/* eslint-disable @typescript-eslint/no-explicit-any */
import chalk from 'chalk'
import dayjs from 'dayjs'

export default {
  get date() {
    return chalk.bgWhiteBright(chalk.black(dayjs().format('YYYY-MM-DD HH:mm:ss')))
  },

  log(message: any, ...optionalParameters: any) {
    console.log(chalk.yellow('LOG'), this.date, message, ...optionalParameters)
  },

  debug(message: any, ...optionalParameters: any) {
    console.debug(chalk.bgYellow('DEBUG'), this.date, message, ...optionalParameters)
  },

  trace(message: any, ...optionalParameters: any) {
    console.trace(chalk.cyan('TRACE'), this.date, message, ...optionalParameters)
  },

  info(message: any, ...optionalParameters: any) {
    console.info(chalk.bgCyan('INFO'), this.date, message, ...optionalParameters)
  },

  warn(message: any, ...optionalParameters: any) {
    console.warn(chalk.red('WARN'), this.date, message, ...optionalParameters)
  },

  error(message: any, ...optionalParameters: any) {
    console.error(chalk.bgRed('ERROR'), this.date, message, ...optionalParameters)
  },

  table: console.table,
}
