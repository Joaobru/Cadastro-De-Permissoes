import connection from '../database/config';
import {Request,Response} from 'express';
import pg, { Pool } from 'pg';

const db = new pg.Pool(connection);

export default class ControllerUsersAndRules{
  async listUsersAndRules(req: Request, res: Response) {
    const user = req.body;

    const selectnome = 'SELECT * from tbLogin where nome = $1'
    const selectlogin = 'SELECT * from tbLogin where login = $1'

    await db.connect()

    const selectednome = await db.query(selectnome ,[user.nome])  
    
    const selectedlogin = await db.query(selectlogin , [user.nome])  

    const contnome = Object.entries(selectednome.rows).length;
    const contlogin = Object.entries(selectedlogin.rows).length;
    
    if(contnome > 0) {
      return res.json(selectednome.rows);
    } else if(contlogin > 0) {
      return res.json(selectedlogin.rows);
    } else{
      return res.json({ error: 'Invalid' })
    }
  }
}