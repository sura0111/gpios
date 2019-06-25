import 'module-alias/register'

import user from '@/env/user.json'
import logger from '@/functions/logger'

logger.info('App is working')
logger.warn(user)
