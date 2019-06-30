import Repository from './Repository'

interface Temperature {
  id: number
  temperature: number
  humidity: number | null
  datetime: number
}

export default class TemperatureRepository extends Repository {
  public readonly table = 'temperatures'

  public insert = async (data: { temperature: number; humidity?: number }) => {
    return await this.query(`INSERT INTO ?? SET ?`, [this.table, data])
  }

  public getList = async (since?: Date, limit?: number): Promise<Temperature[]> => {
    const lastWeek = new Date()
    lastWeek.setDate(lastWeek.getDate() - 7)
    const date = since === undefined ? lastWeek : since
    const baseQuery = 'SELECT * FROM ?? WHERE datetime >= ?'
    const query = limit === undefined ? baseQuery : `${baseQuery} LIMIT ${limit}`
    const data = await this.query(query, [this.table, date])
    return data.results
  }

  public getClosest = async (datetime?: Date): Promise<Temperature | undefined> => {
    const date = datetime === undefined ? new Date() : datetime
    const query = 'SELECT * FROM ?? ORDER BY ABS(TIMESTAMPDIFF(MINUTE, datetime, ?)) LIMIT 1'
    const data = await this.query(query, [this.table, date])
    return data.results[0]
  }

  public getLatest = async (): Promise<Temperature | undefined> => {
    const data = await this.query(`SELECT * FROM ?? ORDER BY datetime DESC LIMIT 1`, [this.table])
    return data.results[0]
  }
}
