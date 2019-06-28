import { CronJob } from 'cron'
import { measureTemperatureThenSave } from '@/functions/temperatureFunction'
import logger from './functions/logger'

logger.info('program started')

const cron = new CronJob('0 0-59/5 * * * *', measureTemperatureThenSave)
cron.start()
