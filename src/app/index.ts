import express from 'express'
import logger from '@/utils/logger'
import router from './routers'
import { Server } from 'http'

const app = express()

app.use(router)

export const listen = (port: number | string = 3001): Promise<Server> => {
  return new Promise(resolve => {
    const server = app.listen(port, () => {
      logger.info(`server is started on port no: ${port}`)
      resolve(server)
    })
  })
}
