import {Request,Response} from 'express';
import connection from '../database/config';
import pg, { Pool } from 'pg';

const db = new pg.Pool(connection);
const db2 = new pg.Pool(connection);
const db3 = new pg.Pool(connection);

export default class ControllerUser{
  async selectUsersAndRules(req: Request, res: Response) {
    const ids = req.body;

    const selectJoin = 'select nome, ruleName from tbLogin as l ' +
    'join tbLoginRules as lr on l.idLogin = lr.fk_idLogin ' +
    'join tbRule as r on r.idRule = lr.fk_idRule ' + 
    'where lr.fk_idLogin = $1 and r.idSystem = $2'

    await db.connect()

    const resultSelect = await db.query(selectJoin, [ ids.fk_idLogin ,ids.fk_IdSystem] )

    return res.json(resultSelect.rows)
  }

  async createUsersAndRules(req: Request, res: Response) {
    const idsLoginRule = req.body;

    const insert = 'insert into tbLoginRules (fk_IdRule, fk_idLogin) values ($1, $2)'
    const contIds = Object.entries(idsLoginRule).length;

    db2.connect()

    for (let i = 0; i < contIds; i++) {
      await db2.query(insert, [idsLoginRule[i].fk_IdRule, idsLoginRule[i].fk_idLogin])
    }

    return res.status(201).json({message:'Login Id and Role Id successfully registered'});
  }

  async deleteLoginRules(req: Request, res: Response){
    const ids = req.body;

    const deleted = 'DELETE FROM tbLoginRules WHERE fk_IdRule = $1 and fk_idLogin = $2'
    const contIds = Object.entries(ids).length;
    
    await db3.connect()
    for (let i = 0; i < contIds; i++) {
      await db3.query(deleted, [ids[i].fk_IdRule, ids[i].fk_idLogin])
    }

    return res.status(201).json({message:'Login and Role Id successfully deleted'});
  }
}