/* eslint-disable @typescript-eslint/no-explicit-any */
import mysql from 'mysql'
import poolConfig from '@/env/poolConfig'
import dayjs from 'dayjs'

export default class Repository {
  public static pool = mysql.createPool(poolConfig)
  public pool: mysql.Pool

  public constructor() {
    this.pool = Repository.pool
  }

  public getDatetime(date: Date): string {
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
  }

  public async query(option: string, value?: any): Promise<{ results: any; fields: mysql.FieldInfo[] | undefined }> {
    return new Promise((resolve, reject) => {
      if (value !== undefined) {
        this.pool.query(option, value, (err, results, fields) => {
          if (err) return reject(err)
          return resolve({ results, fields })
        })
      } else {
        this.pool.query(option, (err, results, fields) => {
          if (err) return reject(err)
          return resolve({ results, fields })
        })
      }
    })
  }
}
