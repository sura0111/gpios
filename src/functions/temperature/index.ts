import { CronJob } from 'cron'
import recordTemperature from './recordTemperature'
import logger from '@/utils/logger'

logger.info('started recording temperatures for every 5 minutes')
const cron = new CronJob('0 0-59/5 * * * *', recordTemperature)
cron.start()
