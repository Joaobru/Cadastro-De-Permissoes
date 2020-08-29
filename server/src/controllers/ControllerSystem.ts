import connection from '../database/config';
import {Request,Response} from 'express';
import pg, { Pool } from 'pg';

const db = new pg.Pool(connection);
const db2 = new pg.Pool(connection);


export default class ControllerSystem{
  async listSystem(req: Request, res: Response) {
    db.connect()

    const select = await db.query(`SELECT * from tbSystem`)

    return res.json(select.rows)
  }
  async listSystemAndRules(req:Request, res: Response) {
    const idSystem = req.params;

    const selectModel = 'select * from tbSystem  as s '+
    'join tbRule as r on s.idSystem = r.idSystem '+
    'where s.idSystem = $1'

    await db2.connect()

    const select = await db2.query(selectModel, [idSystem.idSystem])

    return res.json(select.rows)
  }
}