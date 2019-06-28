import Repository from './Repository'
import mysql from 'mysql'

export default class TemperatureRepository extends Repository {
  public readonly table = 'temperatures'

  public insert = async (data: { temperature: number; humidity?: number }) => {
    return await this.query(`INSERT INTO ${this.table} SET ?`, data)
  }

  public get = async (
    since: Date,
  ): Promise<{
    results: {
      id: number
      temperature: number
      humidity: number
      datetime: number
    }
    fields: mysql.FieldInfo[] | undefined
  }> => {
    return await this.query(`SELECT * FROM ${this.table} WHERE datetime >= '${this.getDatetime(since)}'`)
  }
}
